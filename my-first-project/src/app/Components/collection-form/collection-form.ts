import { Component, computed, inject, input, effect } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CollectionServ } from '../../services/collection-serv';
import { CollectionListItem } from '../collection-list-item/collection-list-item';

@Component({
  imports: [ReactiveFormsModule, RouterLink],
  selector: 'app-collection-form',
  styleUrl: './collection-form.scss',
  templateUrl: './collection-form.html',
})
export class CollectionForm {
  private fb = inject(FormBuilder);
  private collectionServ = inject(CollectionServ);
  private router = inject(Router);

  id = input<string | number>();

  collectForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    category: ['', Validators.required],
    value: [0, Validators.required],
    condition: [''],
  });

  constructor() {
    effect(() => {
      const currentId = this.id();
      if (currentId) {
        const item = this.collectionServ.getItemById(currentId);
        if (item) {
          this.collectForm.patchValue(item);
        }
      }
    });
  }
  onsubmit(): void {
    if (this.collectForm.invalid) return;
    const value = this.collectForm.getRawValue();

    if (this.id()) {
      this.collectionServ.updateCollection({
        id: this.id()!,
        name: value.name!,
        category: value.category as any,
        value: value.value!,
        condition: value.condition || undefined,
      });
      this.collectForm.reset();
      this.router.navigate(['/items', this.id()]);
    } else {
      this.collectionServ.addItem({
        id: Date.now(),
        name: value.name!,
        category: value.category as any,
        value: value.value!,
        condition: value.condition || undefined,
      });
      this.collectForm.reset();
      this.router.navigate(['/items']);
    }
  }
}
