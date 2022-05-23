import { User } from "./user.model";

export class PhotoAlbum {
  id?: string;
  user: User = new User();
  title!: string;
  description?: string;
}
