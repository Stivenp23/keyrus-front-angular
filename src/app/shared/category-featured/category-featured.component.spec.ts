import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryFeaturedComponent } from './tabs-product.component';

describe('CategoryFeaturedComponent', () => {
  let component: CategoryFeaturedComponent;
  let fixture: ComponentFixture<CategoryFeaturedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryFeaturedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
