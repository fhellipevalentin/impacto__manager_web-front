import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAlunoComponent } from './delete-aluno.component';

describe('DeleteAlunoComponent', () => {
  let component: DeleteAlunoComponent;
  let fixture: ComponentFixture<DeleteAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteAlunoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
