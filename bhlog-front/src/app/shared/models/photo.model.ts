import { PhotoAlbum } from "./photo-album.model";

export class Photo {
  id?: string;
  title!: string;
  content!: any;
  description?: string;
  createdAt!: string;
  photoAlbum: PhotoAlbum = new PhotoAlbum();
}
