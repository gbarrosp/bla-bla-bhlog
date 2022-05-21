import { User } from "./user.model";

export interface PhotoAlbum {
  id: string;
  user: User;
  title: string;
  description: string;
}
