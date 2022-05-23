import { User } from "./user.model";

export class Post {
  id?: string;
  user!: User;
  title!: string;
  content!: any;
  created_at!: string;
  commentsCounter!: number;
}
