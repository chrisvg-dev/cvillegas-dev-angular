import { Component, OnInit } from '@angular/core';
import { SpringbootService } from 'src/app/services/springboot.service';

@Component({
  selector: 'app-monthly-payments',
  templateUrl: './monthly-payments.component.html',
  styleUrls: ['./monthly-payments.component.css']
})
export class MonthlyPaymentsComponent implements OnInit {

  data : any[] = [];

  constructor(private springService: SpringbootService) {}

  ngOnInit(): void {
    this.springService.findMonthlyPayments().subscribe(
      {
        next: data => {
          console.log(data);
          this.data = data;
        },
        error: err => {
          console.error(err);
        }
      }
    );
  }


}
