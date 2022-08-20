import { createAction, props } from '@ngrx/store';
import { iCard, iUser } from 'src/app/models/users-github.model';

export const loadUsersGithub = createAction(
  '[Users Github List] Load Users',
  props<{ usersGithub: Array<iUser> }>()
);
