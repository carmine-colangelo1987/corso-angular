import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StatusLabelPipe } from './pipes/status-label.pipe';
import { SnakeCasePipe } from './pipes/snake-case.pipe';
import { CardComponent } from './card/card.component';
import { BtnComponent } from './btn/btn.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    StatusLabelPipe,
    SnakeCasePipe,
    CardComponent,
    BtnComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
