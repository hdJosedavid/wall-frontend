import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SocialComponent } from './components/social/social.component';
import { ColorPaletteComponent } from './components/color-palette/color-palette.component';
import { MediaCommentComponent } from './components/media-comment/media-comment.component';
import { RepplyCommentComponent } from './components/media-comment/repply-comment/repply-comment.component';
import { MediaCommentFooterComponent } from './components/media-comment/media-comment-footer/media-comment-footer.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { PostNewsComponent } from './components/post-news/post-news.component';
import { MediaCommentBodyComponent } from './components/media-comment/media-comment-body/media-comment-body.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    SocialComponent,
    ColorPaletteComponent,
    MediaCommentComponent,
    MediaCommentBodyComponent,
    MediaCommentFooterComponent,
    RepplyCommentComponent,
    SpinnerComponent,
    PostNewsComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    ColorPaletteComponent,
    MediaCommentComponent,
    MediaCommentBodyComponent,
    MediaCommentFooterComponent,
    RepplyCommentComponent,
    SocialComponent,
    SpinnerComponent,
    PostNewsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
})

export class SharedModule { }
