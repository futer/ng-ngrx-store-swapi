import {RestService} from '../../services/rest.service';
import * as CharActions from '../actions/character.actions';

import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {map, switchMap, catchError} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()
export class CharacterEffects {
  constructor(private actions$: Actions,
              private restService: RestService) {
  }

  @Effect()
  getCharacter$ = this.actions$
    .ofType(CharActions.CharacterActionTypes.GetCharacters)
    .pipe(
      switchMap(() => {
        return this.restService.getCharacters('people').pipe(
          map((characters: any) => {
            return new CharActions.GetCharacterSuccess(characters);
          }),
          catchError(error => of(new CharActions.GetCharacterFail(error)))
        );
      })
    );
}
