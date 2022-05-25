import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './shared/components/base-layout/base-layout.component';
import { AuthGuard } from './shared/services/auth/auth.guard';
import { HomeView, LoginView, PhotoAlbumsView, PhotoAlbumView, PhotosView, PostsView, PostView, SignUpView } from './shared/utils/views.utils';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { PhotoAlbumsComponent } from './views/photo-albums/photo-albums.component';
import { PhotosComponent } from './views/photos/photos.component';
import { PostViewComponent } from './views/post-view/post-view.component';
import { PostsComponent } from './views/posts/posts.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', redirectTo: LoginView.url, pathMatch: 'full' },
  { path: LoginView.url, component: LoginComponent },
  { path: SignUpView.url, component: SignUpComponent },
  { path: '',
    component: BaseLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: HomeView.url, component: HomeComponent },
      { path: PostsView.url, component: PostsComponent },
      { path: PhotosView.url, component: PhotosComponent },
      { path: PhotoAlbumView.urlData, component: PhotosComponent },
      { path: PhotoAlbumsView.url, component: PhotoAlbumsComponent },
      { path: PostView.urlData, component: PostViewComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
