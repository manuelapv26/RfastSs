import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboritoryOrdersComponent } from './laboritory-orders.component';

describe('LaboritoryOrdersComponent', () => {
  let component: LaboritoryOrdersComponent;
  let fixture: ComponentFixture<LaboritoryOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LaboritoryOrdersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LaboritoryOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
