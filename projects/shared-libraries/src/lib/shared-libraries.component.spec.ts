import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedLibrariesComponent } from './shared-libraries.component';

describe('SharedLibrariesComponent', () => {
  let component: SharedLibrariesComponent;
  let fixture: ComponentFixture<SharedLibrariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedLibrariesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedLibrariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
