import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringbootSimpleCrudComponent } from './springboot-simple-crud.component';

describe('SpringbootSimpleCrudComponent', () => {
  let component: SpringbootSimpleCrudComponent;
  let fixture: ComponentFixture<SpringbootSimpleCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpringbootSimpleCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpringbootSimpleCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
