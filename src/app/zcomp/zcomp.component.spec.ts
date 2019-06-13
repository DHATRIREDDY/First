import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZcompComponent } from './zcomp.component';

describe('ZcompComponent', () => {
  let component: ZcompComponent;
  let fixture: ComponentFixture<ZcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
