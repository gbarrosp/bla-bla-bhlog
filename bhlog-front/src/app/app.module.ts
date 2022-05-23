import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseLayoutComponent } from './shared/components/base-layout/base-layout.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { PhotoComponent } from './shared/components/photo/photo.component';
import { PhotosGridComponent } from './shared/components/photos-grid/photos-grid.component';
import { PostComponent } from './shared/components/post/post.component';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';
import { RequestInterceptor } from './shared/interceptors/request.interceptor';
import { ServerErrorInterceptor } from './shared/interceptors/server-error.interceptor';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { PhotoAlbumComponent } from './views/photo-album/photo-album.component';
import { PhotoAlbumsComponent } from './views/photo-albums/photo-albums.component';
import { PhotosComponent } from './views/photos/photos.component';
import { PostsComponent } from './views/posts/posts.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    PostsComponent,
    PhotosComponent,
    BaseLayoutComponent,
    PostComponent,
    PhotoComponent,
    PhotosGridComponent,
    PhotoAlbumsComponent,
    PhotoAlbumComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatDividerModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ServerErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
