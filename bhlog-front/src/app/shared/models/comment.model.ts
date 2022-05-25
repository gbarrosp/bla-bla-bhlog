import { Post } from "./post.model";
import { User } from "./user.model";

export class Comment {
  id?: string;
  post: Post = new Post();
  user: User = new User();
  content!: string;
  createdAt!: string;
}
