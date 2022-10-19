import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondTabComponent } from './component/second-tab/second-tab.component';
import { SecondRoutingModule } from './second-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SecondService } from './service/second.service';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    SecondTabComponent
  ],
  imports: [
    CommonModule,
    SecondRoutingModule,
    HttpClientModule,
    MatTableModule
    
  ],
  providers: [SecondService]
})
export class SecondModule { }
