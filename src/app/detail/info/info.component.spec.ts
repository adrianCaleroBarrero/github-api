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
      spyOn(component.route.paramMap, 'subscribe').and.returnValue(
        of('1') as unknown as Subscription
      );
      spyOn(component.store, 'subscribe').and.returnValues(
        of(initialState) as unknown as Subscription
      );
      fixture.detectChanges();

      expect(component.store.subscribe).toHaveBeenCalled();
    });
  });
});
