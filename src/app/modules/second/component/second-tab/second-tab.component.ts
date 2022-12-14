import { Component, OnDestroy, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
import { BaseComponent } from 'src/app/core/abstract/BaseComponent';
import { ICompany } from 'src/app/core/interfaces/company.interface';
import { IProduct } from 'src/app/core/interfaces/product.interface';
import { InvoiceService } from 'src/app/shared/services/invoice.service';
import { SecondService } from '../../service/second.service';

@Component({
  selector: 'app-second-tab',
  templateUrl: './second-tab.component.html',
  styleUrls: ['./second-tab.component.scss']
})
export class SecondTabComponent extends BaseComponent implements OnInit  {

  constructor(private secondService: SecondService, private invoiceService: InvoiceService) {
    super();
  }
  
  data: ICompany = {
    name: '',
    address: '',
    phones: []
  };
  displayedColumns: string[] = ['name', 'count', 'price'];
  dataSource: IProduct[] = [];

  ngOnInit(): void {
    this.secondService.getConfig().pipe(takeUntil(this.destroy$)).subscribe(item => {
      this.data = item;
    });
    
    this.invoiceService.invoiceData$.pipe(takeUntil(this.destroy$)).subscribe(invoice => {
      this.dataSource = invoice;
    });
  }

  getTotalPrice() {
    return this.dataSource.reduce((acc, value) => acc + value.count * value.price , 0)
  }

}
