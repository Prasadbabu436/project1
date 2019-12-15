import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducthambComponent } from './producthamb.component';

describe('ProducthambComponent', () => {
  let component: ProducthambComponent;
  let fixture: ComponentFixture<ProducthambComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducthambComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducthambComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
