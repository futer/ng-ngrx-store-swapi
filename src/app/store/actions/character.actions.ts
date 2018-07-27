import {Action} from '@ngrx/store';
import {Character} from '../../model/character.model';

export enum CharacterActionTypes {
  GetCharacters = '[CHARACTERS] GET CHARACTERS',
  GetCharactersSuccess = '[CHARACTERS] GET CHARACTERS SUCCESS',
  GetCharactersFail = '[CHARACTERS] GET CHARACTERS FAIL',
}


export class GetCharacter implements Action {
  readonly type = CharacterActionTypes.GetCharacters;

  constructor(public payload: Character) {
  }
}

export class GetCharacterSuccess implements Action {
  readonly type = CharacterActionTypes.GetCharactersSuccess;

  constructor(public payload: Character) {
  }
}

export class GetCharacterFail implements Action {
  readonly type = CharacterActionTypes.GetCharactersFail;

  constructor(public payload: Character) {
  }
}



export type Actions =
  GetCharacter |
  GetCharacterSuccess |
  GetCharacterFail;

