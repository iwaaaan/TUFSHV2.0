export interface Link {
  name: string;
  url: string;
  description?: string;
}

export interface LinkCategory {
  [key: string]: Link[];
}