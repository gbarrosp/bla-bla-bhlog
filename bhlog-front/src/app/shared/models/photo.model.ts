import { PhotoAlbum } from "./photo-album.model";

export interface Photo {
  id: string;
  photo_album: PhotoAlbum;
  title: string;
  description: string;
  created_at: string;
}
