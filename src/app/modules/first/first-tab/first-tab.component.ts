import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InvoiceService } from 'src/app/shared/services/invoice.service';
import { CustomValidators } from 'src/app/shared/validators/custom-validators';

@Component({
  selector: 'app-first-tab',
  templateUrl: './first-tab.component.html',
  styleUrls: ['./first-tab.component.scss']
})
export class FirstTabComponent implements OnInit {

  constructor(private fb: FormBuilder, private invoiceService: InvoiceService, private router: Router) { }
  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.fb.group({
      items: this.fb.array([])
    });
    this.addItemFormGroup();
  }

  addItemFormGroup() {
    const item = this.fb.group({
      name: [null, [CustomValidators.requiredValidator, Validators.minLength(3), Validators.maxLength(30)]],
      count: [1, [CustomValidators.requiredValidator, Validators.minLength(1), Validators.maxLength(100), Validators.pattern("^[0-9]*$")]],
      price: [null, [CustomValidators.requiredValidator, Validators.minLength(1), Validators.maxLength(1000000), Validators.pattern("^[0-9]*$")]]
    });
    this.items.push(item);
  }

  submit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.invoiceService.nextInvoice(this.form.value.items);
      this.router.navigate(['/second']);
    }
  }
  
  deleteRow(itemIndex: number) {
    this.items.removeAt(itemIndex);
  }

  get items(): FormArray {
    return this.form.get('items') as FormArray;
  }
}
