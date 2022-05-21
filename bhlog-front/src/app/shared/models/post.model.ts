import { User } from "./user.model";

export interface Post {
  id: string;
  user: User;
  title: string;
  content: any;
  created_at: string;
}
