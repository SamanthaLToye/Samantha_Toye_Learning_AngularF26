import { Component, computed, inject, input, effect } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CollectionServ } from '../../services/collection-serv';
import { collection } from '../../shared/collection';
@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-collection-form',
  styleUrl: './collection-form.scss',
  templateUrl: './collection-form.html',
})
export class CollectionForm {
  private fb = inject(FormBuilder);
  private collectionServ = inject(CollectionServ);
  private router = inject(Router);

  id = input<string>();
  protected isEditMode = computed(() => this.id() !== undefined);
  protected collectForm = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    category: ['Collectible'],
    value: [0, Validators.required],
    condition: ['Mint'],
  });
  constructor() {
    effect(() => {
      const id = this.id();
      if (id === undefined) {
        return;
        }
        const collection = this.collectionServ.getCollection(Number(id));
        if (collection) {
          this.collectForm.patchValue({ ...collection, condition: collection.condition });
      }
    });
  }
  protected onSubmit(): void {
    if (this.collectForm.invalid){
      return;
      }
    const formValue = this.collectForm.getRawValue();
    const id = this.isEditMode() ? Number(this.id()) : this.collectionServ.nextId();

    if (this.isEditMode()) {
     this.collectionServ.updateCollection({ id, ...formValue } as collection);
    } else {
      this.collectionServ.addCollection({ id, ...formValue } as collection);
      }
      this.collectForm.reset();
      this.router.navigate(['/items']);
  }
}
