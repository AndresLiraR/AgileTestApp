import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridDisplayerComponent } from './grid-displayer.component';

describe('GridDisplayerComponent', () => {
  let component: GridDisplayerComponent;
  let fixture: ComponentFixture<GridDisplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridDisplayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
