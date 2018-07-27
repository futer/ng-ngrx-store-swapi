import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {characterRecuder} from '../app/store/reducer/characters.reducer';
import {ShowCharactersComponent} from './components/show-characters/show-characters.component';
import {EffectsModule} from '@ngrx/effects';
import {effects} from './store';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ShowCharactersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      character: characterRecuder
    }),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([
      effects.CharacterEffects
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {
}
