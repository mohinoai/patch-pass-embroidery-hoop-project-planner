/**
 * @typedef {import('../types').Entry} Entry
 * @typedef {import('../types').SortOrder} Sort
 * @typedef {import('../types').ValidationErrors} Errors
 */
export const statuses = ['Queued', 'In Progress', 'Finished'];
export const keys = ['id','name','description','hoop','status','colors','started','finished','notes'];
/** @param {Partial<Entry>} raw @returns {Entry} */
export function normalizeEntry(raw) {
  const out = {};
  for (const key of keys) out[key] = typeof raw[key] === 'string' ? raw[key].trim() : '';
  out.art = Number.isInteger(raw.art) && raw.art >= 0 && raw.art < 6 ? raw.art : 0;
  return out;
}
function validDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const [y,m,d] = value.split('-').map(Number);
  const leap = y%4===0 && (y%100!==0 || y%400===0);
  return m>=1 && m<=12 && d>=1 && d<=[31,leap?29:28,31,30,31,30,31,31,30,31,30,31][m-1];
}
/** @param {Entry} e @param {string} today @returns {Errors} */
export function validateEntry(e,today) {
  const errors = {};
  for (const [key,max] of Object.entries({name:60,description:180,hoop:40,colors:240,notes:1000})) {
    if (e[key].length>max) errors[key]=`Keep this under ${max} characters.`;
  }
  for (const key of ['name','description','hoop']) if (!e[key]) errors[key]='A little detail is needed here.';
  if (!statuses.includes(e.status)) errors.status='Choose a project status.';
  if (!validDate(e.started) || e.started>today) errors.started='Choose a valid start date, today or earlier.';
  if (e.finished && (!validDate(e.finished) || e.finished>today || e.finished<e.started)) errors.finished='Finish date must be between the start date and today.';
  if (e.finished && e.status!=='Finished') errors.finished='Choose Finished status to add a finish date.';
  return errors;
}
/** The form's validation gate, applied to whatever localStorage returns.
 * @param {string} raw @param {string} today @returns {Entry[]} */
export function parseStored(raw,today) {
  const rows = JSON.parse(raw), seen = new Set();
  if (!Array.isArray(rows)) throw Error('not a list');
  return rows.map(row => {
    const e = normalizeEntry(Object(row));
    if (!e.id || seen.has(e.id) || Object.keys(validateEntry(e,today)).length) throw Error('invalid row');
    return seen.add(e.id), e;
  });
}
/** @param {Entry[]} entries @param {string} status @returns {Entry[]} */
export const filterEntries = (entries,status) => entries.filter(e=>status==='All projects'||e.status===status);
/** @param {Entry[]} entries @param {string} query @returns {Entry[]} */
export const searchEntries = (entries,query) => entries.filter(e=>[e.name,e.description,e.colors,e.notes,e.hoop].join(' ').toLowerCase().includes(query.trim().toLowerCase()));
/** @param {Entry[]} entries @param {Sort} order @returns {Entry[]} */
export const sortEntries = (entries,order) => [...entries].sort((a,b)=>order==='name'?a.name.localeCompare(b.name):order==='oldest'?a.started.localeCompare(b.started):b.started.localeCompare(a.started));
