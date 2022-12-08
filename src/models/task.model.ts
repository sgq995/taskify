export interface ITaskModel {
  id: string;
  tags: string[];
  content: string;
  createdAt: Date;
  modifiedAt: Date;
  important: boolean;
}
