import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { iReposGithub } from 'src/app/models/users-github.model';
import * as ac from './repos-users.action.creators';

export const initialState = {
  reposGithub: [] as ReadonlyArray<iReposGithub>,
};

export const reposGithubReducer = createReducer(
  initialState,
  on(ac.loadReposGithub, (state, { reposGithub }) => ({
    reposGithub: [...reposGithub],
  }))
);
