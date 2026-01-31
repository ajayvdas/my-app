export type ClientStatus = "active" | "prospect" | "on_hold" | "archived";

export interface Client {
  id: string;
  name: string;
  status: ClientStatus;
  industry: string;
  website: string;
  location: string;
  owner: string;
  primaryContactName: string;
  primaryContactEmail: string;
  notes?: string;
  segment: string;
  lastActivityLabel: string;
}

export interface ClientProjects {
  active: number;
  onHold: number;
  completed: number;
}
