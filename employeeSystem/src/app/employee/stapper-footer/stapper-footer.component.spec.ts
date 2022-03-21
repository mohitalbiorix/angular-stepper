import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StapperFooterComponent } from './stapper-footer.component';

describe('StapperFooterComponent', () => {
  let component: StapperFooterComponent;
  let fixture: ComponentFixture<StapperFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StapperFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StapperFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
