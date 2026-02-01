export type ProjectStatus = "active" | "planned" | "on_hold" | "completed";
export type ProjectPriority = "high" | "medium" | "low";

export interface LinkedProject {
  id: string;
  name: string;
  status: ProjectStatus;
  priority: ProjectPriority;
}

export type FileType = "pdf" | "figma" | "image" | "document" | "video" | "other";

export interface SharedFile {
  id: string;
  name: string;
  type: FileType;
  size: string;
}
