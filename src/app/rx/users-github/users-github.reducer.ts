import { createReducer, on } from '@ngrx/store';
import { iUser } from 'src/app/models/users-github.model';
import * as ac from './users-github.action.creators';

export const initialState = {
  usersGithub: [] as ReadonlyArray<iUser>,
};

export const usersGithubReducer = createReducer(
  initialState,
  on(ac.loadUsersGithub, (state, { usersGithub }) => ({
    usersGithub: [...usersGithub],
  }))
);
