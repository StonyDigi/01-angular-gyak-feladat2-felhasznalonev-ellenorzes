import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernameValidCheckComponent } from './username-valid-check.component';

describe('UsernameValidCheckComponent', () => {
  let component: UsernameValidCheckComponent;
  let fixture: ComponentFixture<UsernameValidCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsernameValidCheckComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsernameValidCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
