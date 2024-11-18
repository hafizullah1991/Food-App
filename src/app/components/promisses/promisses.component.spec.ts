import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromissesComponent } from './promisses.component';

describe('PromissesComponent', () => {
  let component: PromissesComponent;
  let fixture: ComponentFixture<PromissesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromissesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromissesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
