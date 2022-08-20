import { createAction, props } from '@ngrx/store';
import { iReposGithub } from 'src/app/models/users-github.model';

export const loadReposGithub = createAction(
  '[Repos Github List] Load Repos',
  props<{ reposGithub: Array<iReposGithub> }>()
);
