import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReallPromiseComponent } from './reall-promise.component';

describe('ReallPromiseComponent', () => {
  let component: ReallPromiseComponent;
  let fixture: ComponentFixture<ReallPromiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReallPromiseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReallPromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
