import { ActionReducerMap } from '@ngrx/store';
import {
  iFollowersGithubState,
  iReposGithubState,
  iUsersGithubState,
} from '../models/users-github.model';
import { followersGithubReducer } from './followers-users/followers-users.reducer';
import { reposGithubReducer } from './repos-users/repos-users.reducer';
import { usersGithubReducer } from './users-github/users-github.reducer';

export interface iAppState {
  usersGithub: iUsersGithubState;
  followersGithub: iFollowersGithubState;
  reposGithub: iReposGithubState;
}

export const ROOT_REDUCERS: ActionReducerMap<iAppState> = {
  usersGithub: usersGithubReducer,
  followersGithub: followersGithubReducer,
  reposGithub: reposGithubReducer,
};
