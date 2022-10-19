import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from 'src/app/core/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  
  private invoice = new BehaviorSubject<IProduct[]>([]);

  get invoiceData() {
      return this.invoice.getValue();
  }

  get invoiceData$() {
      return this.invoice;
  }

  nextInvoice(next: IProduct[]) {
      return this.invoice.next(next);
  }
  
  constructor() { }
}
