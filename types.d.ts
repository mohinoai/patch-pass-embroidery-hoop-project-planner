export type Status = 'Queued' | 'In Progress' | 'Finished';
export type SortOrder = 'newest' | 'oldest' | 'name';
export interface Entry { id: string; name: string; description: string; hoop: string; status: Status; colors: string; started: string; finished: string; notes: string; art: number; }
export type ValidationErrors = Partial<Record<keyof Entry, string>>;
