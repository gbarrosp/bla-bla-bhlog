import { User } from "./user.model";

export class Post {
  id?: string;
  user!: User;
  title!: string;
  content!: any;
  createdAt!: string;
  commentsCounter!: number;
}
