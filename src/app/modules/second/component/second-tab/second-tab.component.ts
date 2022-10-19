import { Component, OnInit } from '@angular/core';
import { ICompany } from 'src/app/core/interfaces/company.interface';
import { IProduct } from 'src/app/core/interfaces/product.interface';
import { InvoiceService } from 'src/app/shared/services/invoice.service';
import { SecondService } from '../../service/second.service';

@Component({
  selector: 'app-second-tab',
  templateUrl: './second-tab.component.html',
  styleUrls: ['./second-tab.component.scss']
})
export class SecondTabComponent implements OnInit {

  constructor(private secondService: SecondService, private invoiceService: InvoiceService) { }
  data: ICompany = {
    name: '',
    address: '',
    phones: []
  };
  displayedColumns: string[] = ['name', 'count', 'price'];
  dataSource: IProduct[] = [];
  phones: string[] = [];

  ngOnInit(): void {
    this.secondService.getConfig().subscribe(item => {
      this.data = item;
      this.phones = item.phones;
      this.phones.join(",");
    });
    
    this.invoiceService.invoiceData$.subscribe(invoice => {
      this.dataSource = invoice;
    })
  }

  getTotalPrice() {
    return this.dataSource.reduce((acc, value) => acc + value.count * value.price , 0)
  }

}
