import { Component, OnInit } from '@angular/core';
export interface MonthDays{
  weekdayInitial: string,
  weekdayDate: number
}

export const WeekDays=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.sass']
})
export class MonthComponent implements OnInit {
  // weekdayInitial: string ='';
  // weekdayDate: number = 1;
  monthDays: MonthDays[] = [];
  constructor() { }

  ngOnInit(): void {
    this.generateMonthWeekdays(new Date());
  }

  generateMonthWeekdays(date: Date){
    let maxMonthDays = 31;
    for (let weekday = 1; weekday < maxMonthDays; weekday++) {
      const currDate = new Date(`${date.getMonth()}/${weekday}/${date.getFullYear()}`);
      const weekdayInitial = WeekDays[currDate.getDay()][0];
      const weekdayDate= currDate.getDate();
      this.monthDays.push({weekdayInitial,weekdayDate})
    }
    console.table(this.monthDays)
  }

}
