import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { DecimalPipe } from '@angular/common';

import { AppComponent } from './app.component';
import { StatusLabelPipe } from './pipes/status-label.pipe';
import { SnakeCasePipe } from './pipes/snake-case.pipe';
import { CardComponent } from './card/card.component';
import { BtnComponent } from './btn/btn.component';
import { ArticleComponent } from './article/article.component';
import { UserComponent } from './components/user/user.component';
import { PlanetComponent } from './components/planet/planet.component';
import { PokeCardComponent } from './components/poke-card/poke-card.component';
import { PokeContainerComponent } from './components/poke-container/poke-container.component';

@NgModule({
  declarations: [
    AppComponent,
    StatusLabelPipe,
    SnakeCasePipe,
    CardComponent,
    BtnComponent,
    ArticleComponent,
    UserComponent,
    PlanetComponent,
    PokeCardComponent,
    PokeContainerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
