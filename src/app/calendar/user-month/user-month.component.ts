import { Component, OnInit } from '@angular/core';
export interface MonthDays{
  weekdayInitial: string,
  weekdayDate: number,
  isToday?: boolean,
  weekdayPassed: boolean,
  isWeekend?: boolean
}

export const WeekDays=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

@Component({
  selector: 'app-user-month',
  templateUrl: './user-month.component.html',
  styleUrls: ['./user-month.component.sass']
})
export class UserMonthComponent implements OnInit {
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
      const today: Date = new Date();
      const weekdayInitial = WeekDays[currDate.getDay()][0];
      const weekdayDate= currDate.getDate();
      const isToday = weekdayDate === today.getDate();
      const weekdayPassed = weekday > today.getDate();
      const isWeekend = currDate.getDay() == 0 && currDate.getDay() == 7
      this.monthDays.push({weekdayInitial,weekdayDate, isToday, weekdayPassed, isWeekend})
    }
    console.table(this.monthDays)
  }

}
