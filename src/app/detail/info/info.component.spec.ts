import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserTestingModule } from '@angular/platform-browser/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { of, Subscription } from 'rxjs';
import { iAppState } from 'src/app/rx/app.state';
import { __param } from 'tslib';

import { InfoComponent } from './info.component';

describe('InfoComponent', () => {
  let mockInitialState = {
    usersGithub: [
      {
        id: 1,
        login: 'test',
        avatar_url: 'url',
        url: 'url',
        followers_url: 'url',
        repos_url: 'url',
        followers: 1,
        following: 1,
        name: 'test',
        bio: 'test',
        public_repos: 1,
        location: 'test',
      },
    ],
    followersGithub: [],
    reposGithub: [],
  };
  let component: InfoComponent;
  let fixture: ComponentFixture<InfoComponent>;
  let initialState = mockInitialState;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoComponent],
      imports: [
        RouterTestingModule,
        BrowserTestingModule,
        HttpClientTestingModule,
      ],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(InfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('When i search the user whit the params', () => {
    it('Then I search a user ', () => {
      spyOn(component.store, 'select');
      component.userGithub = initialState.usersGithub[0];

      spyOn(component.request, 'getAllFollowers').and.returnValue(
        of(component.store.dispatch)
      );
      spyOn(component.store, 'dispatch');
      fixture.detectChanges();

      expect(component.store.dispatch).toHaveBeenCalled();
    });
  });
});
