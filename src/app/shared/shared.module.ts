import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentaryComponent } from './components/commentary/commentary.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SocialComponent } from './components/social/social.component';
import { ColorPaletteComponent } from './components/color-palette/color-palette.component';
import { MediaCommentComponent } from './components/media-comment/media-comment.component';
import { RepplyCommentComponent } from './components/media-comment/repply-comment/repply-comment.component';
import { MediaCommentFooterComponent } from './components/media-comment/media-comment-footer/media-comment-footer.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { PostNewsComponent } from './post-news/post-news.component';

@NgModule({
  declarations: [
    CommentaryComponent,
    FooterComponent,
    NavbarComponent,
    SocialComponent,
    ColorPaletteComponent,
    MediaCommentComponent,
    RepplyCommentComponent,
    MediaCommentFooterComponent,
    SpinnerComponent,
    PostNewsComponent
  ],
  exports: [
    CommentaryComponent,
    FooterComponent,
    NavbarComponent,
    ColorPaletteComponent,
    MediaCommentComponent,
    RepplyCommentComponent,
    MediaCommentFooterComponent,
    SocialComponent,
    SpinnerComponent,
    PostNewsComponent
  ],
  imports: [
    CommonModule,
  ],
})

export class SharedModule { }
