import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { DetailComponent } from './detail.component';

describe('DetailComponent', () => {
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
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;
  let initialState = mockInitialState;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
