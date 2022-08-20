import { createReducer, on } from '@ngrx/store';
import { iUsersGithub } from 'src/app/models/users-github.model';
import * as ac from './followers-users.action.creators';

export const initialState = {
  followersGithub: [] as ReadonlyArray<iUsersGithub>,
};

export const followersGithubReducer = createReducer(
  initialState,
  on(ac.loadfollowersGithub, (state, { followersGithub }) => ({
    followersGithub: [...followersGithub],
  }))
);
