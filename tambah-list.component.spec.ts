import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahListComponent } from './tambah-list.component';

describe('TambahListComponent', () => {
  let component: TambahListComponent;
  let fixture: ComponentFixture<TambahListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TambahListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
