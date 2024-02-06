import { Component } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent {
  seconds : number = 10;
  count1: number = 0;
  count2: number = 0;
  winner : string ="";



  constructor() {
    this.startTimer();
  }

  counter1(event: Event) {
    this.count1++;
  }

  counter2(event: Event) {
    this.count2++;
  }

  startTimer() {
   

    const interval = setInterval(() => {
      console.log(this.seconds);
      this.seconds--;

      if (this.seconds == 0) {
        this.seconds = 0 ; 
        if(this.count1>this.count2)
        this.winner = "Vote A";
      else if(this.count1<this.count2)
      this.winner = "Vote B";
    else if(this.count1==this.count2)
    this.winner="It's a tie!"
        clearInterval(interval);
        console.log("Timer completed!");
      }
    }, 1000);
  }

}
