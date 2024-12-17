import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudappsComponent } from './crudapps.component';

describe('CrudappsComponent', () => {
  let component: CrudappsComponent;
  let fixture: ComponentFixture<CrudappsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrudappsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrudappsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
