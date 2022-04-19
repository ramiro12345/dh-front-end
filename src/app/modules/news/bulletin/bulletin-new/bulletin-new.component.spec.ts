import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletinNewComponent } from './bulletin-new.component';

describe('BulletinNewComponent', () => {
  let component: BulletinNewComponent;
  let fixture: ComponentFixture<BulletinNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulletinNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulletinNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
