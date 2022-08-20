import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { iUsersGithub } from 'src/app/models/users-github.model';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let mockInitialState = {
    usersGithub: [],
    followersGithub: [],
    reposGithub: [],
  };
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let initialState = mockInitialState;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
      ],
      declarations: [SearchComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  describe('When i render', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('When I search someone', () => {
    it('Then it should be call the method', () => {
      spyOn(component.store, 'dispatch');
      fixture.detectChanges();

      component.sendSearch();
      expect(component.store.dispatch).toHaveBeenCalled();
    });
  });
  it('Then it should be call the request service ', () => {
    spyOn(component.request, 'getSearch').and.returnValue(component.store);

    component.search.setValue('pepe');
    fixture.detectChanges();

    component.sendSearch();
    expect(component.request.getSearch).toHaveBeenCalled();
  });
});
