import { Post } from "./post.model";
import { User } from "./user.model";

export interface Comment {
  id: string;
  post: Post;
  user: User;
  content: string;
  created_at: string;
}
