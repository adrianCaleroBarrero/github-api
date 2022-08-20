import { createAction, props } from '@ngrx/store';
import { iUsersGithub } from 'src/app/models/users-github.model';

export const loadfollowersGithub = createAction(
  '[Follews Github List] Load Followers',
  props<{ followersGithub: Array<iUsersGithub> }>()
);
