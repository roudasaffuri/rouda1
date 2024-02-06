import { Component } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent {

 
  date: Date = new Date();


  ngOnInit() {
   
    // Set up a timer to update the time every second
    setInterval(() => {
      this.date = new Date();
    }, 3000);

  }
  
  
}
