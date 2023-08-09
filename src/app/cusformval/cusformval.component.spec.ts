import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusformvalComponent } from './cusformval.component';

describe('CusformvalComponent', () => {
  let component: CusformvalComponent;
  let fixture: ComponentFixture<CusformvalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CusformvalComponent]
    });
    fixture = TestBed.createComponent(CusformvalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
