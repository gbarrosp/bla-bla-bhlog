import { PhotoAlbum } from "./photo-album.model";

export class Photo {
  id?: string;
  title!: string;
  content!: any;
  description?: string;
  created_at!: string;
  photo_album: PhotoAlbum = new PhotoAlbum();
}
