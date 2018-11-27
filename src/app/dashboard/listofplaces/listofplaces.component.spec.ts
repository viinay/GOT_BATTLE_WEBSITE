import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofplacesComponent } from './listofplaces.component';

describe('ListofplacesComponent', () => {
  let component: ListofplacesComponent;
  let fixture: ComponentFixture<ListofplacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListofplacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofplacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
