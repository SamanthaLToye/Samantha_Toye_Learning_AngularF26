import { Component, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CollectionServ } from '../../services/collection-serv';
import { minLength } from '@angular/forms/signals';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-collection-form',
  styleUrl: './collection-form.scss',
  templateUrl: './collection-form.html',
})
export class CollectionForm {
  private fb = inject(FormBuilder);
  private collectionServ = inject(CollectionServ);

  collectForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    category: ['', Validators.required],
    value: [0, Validators.required],
    condition: [''],
  });
onsubmit(): void {
  if (this.collectForm.invalid) return;
  const value = this.collectForm.getRawValue();
  this.collectionServ.addItem({ id: Date.now(), ...value });
  this.collectForm.reset();
  }
}
