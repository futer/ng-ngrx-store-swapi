import { ActionReducer, Action, createSelector, createFeatureSelector } from '@ngrx/store';
import { Character } from '../../model/character.model';
import * as CharacterActions from '../../store/actions/character.actions';

const initialState: Character = {
    name: null,
    birthYear: null,
    gender: null,
    worldName: null
};

export function characterRecuder( state: Character = initialState, action: CharacterActions.Actions ) {
    switch (action.type) {
        case CharacterActions.CharacterActionTypes.GetCharacters:
            return {
                ...state
            };
        case CharacterActions.CharacterActionTypes.GetCharactersSuccess:
            return [
                action.payload
            ];
        case CharacterActions.CharacterActionTypes.GetCharactersFail:
            return {
                ...state
            };
        default:
            return state;
    }
}
