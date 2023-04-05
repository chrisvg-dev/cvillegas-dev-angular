import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapsIconsComponent } from './bootstraps-icons.component';

describe('BootstrapsIconsComponent', () => {
  let component: BootstrapsIconsComponent;
  let fixture: ComponentFixture<BootstrapsIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootstrapsIconsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BootstrapsIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
