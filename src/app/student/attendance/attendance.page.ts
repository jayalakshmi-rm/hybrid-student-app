import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Constants } from 'src/app/services/constant';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-attendance',
  templateUrl: 'attendance.page.html',
  styleUrls: ['attendance.page.scss']
})
export class AttendancePage implements OnInit {

  selectedDate = '2020-01-01'; // (assign your selected date to this Object)
  disabledDates: Date[] = [
      new Date(1545911005644),     
      new Date(),     
      new Date(2018, 12, 12), // Months are 0-based, this is August, 10th.     
      new Date('Wednesday, December 26, 2018'), // Works with any valid Date formats like long format     
      new Date('12-14-2018'), // Short format
  ];
//   datePickerObj = {
//   inputDate: new Date('2018-08-10'), // default new Date()
//   fromDate: new Date('2017-01-01'), // default null
//   toDate: new Date('2020-12-30'), // default null
//   showTodayButton: false, // default true
//   closeOnSelect: true, // default false
//   disableWeekDays: [4], // default []
//   mondayFirst: true, // default false
//   setLabel: 'S',  // default 'Set'
//   todayLabel: 'T', // default 'Today'
//   closeLabel: 'C', // default 'Close'
//   disabledDates: this.disabledDates, // default []
//   titleLabel: 'Select a Date', // default null
//   monthsList: ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
//   weeksList: ["S", "M", "T", "W", "T", "F", "S"],
//   dateFormat: 'YYYY-MM-DD', // default DD MMM YYYY
//   clearButton : false , // default true
//   momentLocale: 'pt-BR', // Default 'en-US'
//   yearInAscending: true, // Default false
//   btnCloseSetInReverse: true, // Default false
//   btnProperties: {
//     expand: 'block', // Default 'block'
//     fill: '', // Default 'solid'
//     size: '', // Default 'default'
//     disabled: '', // Default false
//     strong: '', // Default false
//     color: '' // Default ''
//   },
//   arrowNextPrev: {
//     nextArrowSrc: 'assets/images/arrow_right.svg',
//     prevArrowSrc: 'assets/images/arrow_left.svg'
//   }, // This object supports only SVG files.
//   highlightedDates: [
//    { date: new Date('2019-09-10'), color: '#ee88bf', fontColor: '#fff' },
//    { date: new Date('2019-09-12'), color: '#50f2b1', fontColor: '#fff' }
//   ], // Default [],
//   isSundayHighlighted : {
//    fontColor: '#ee88bf' // Default null
//   } // Default {}
// };
datePickerObj = {
  titleLabel: 'Select a Date',
  dateFormat: 'YYYY-MM-DD'
}
smsEnabled = true;
mailEnabled = true;

studentList = [];
attendanceDetails = [];
attendance;
allOption = '';
  constructor(private activatedRoute: ActivatedRoute, public loadingController: LoadingController) {
    }

    ngOnInit() {
      this.studentList = Constants.STUDENT_LIST;
      this.attendanceDetails = Constants.ATTENDANCE_DETAILS;
      let index = this.attendanceDetails.findIndex(item => item.date == this.selectedDate);
      this.attendance = (index !== -1) ? this.attendanceDetails[index] : {};
    }

    datePickerHandler(event) {
      this.allOption = '';
      let index = this.attendanceDetails.findIndex(item => item.date == event);
      this.attendance = (index !== -1) ? this.attendanceDetails[index] : {};
      if(Object.getOwnPropertyNames(this.attendance).length === 0) {
      this.studentList.map(item => {
        this.attendance[item.rollNumber] = 'P';
      });
      }
    }

    isAllSelected(option) {
      if(this.allOption === option) { return true;}
      return false;
    }

    isSelected(rollnumber, option) {
      this.allOption ='';
      let checked = false;
      if(!this.attendance[rollnumber] && option ==='P') {
        checked = true;
      } else if(this.attendance[rollnumber] && this.attendance[rollnumber] === option) {
        checked = true;
      }

      return checked;
    }

    toggleOption(enabled) {
      if(enabled) {
        return 'radio-button-on';
      } else {
        return 'radio-button-off';
      }
    }

    async updateAttendance() {
      let index = this.attendanceDetails.findIndex(item => item.date === this.selectedDate);

      if(index !== -1) {
        let propertyArray = Object.getOwnPropertyNames(this.attendance);
        propertyArray.map(item => {
        this.attendanceDetails[index][item] = this.attendance[item];
        });
      }
      else {
        this.attendanceDetails.push(Object.assign(this.attendance, {date: this.selectedDate}));
      }

      let loaderMsg = '';

      if(this.attendance[this.studentList[0].rollNumber] !== 'H') {

      loaderMsg += (this.smsEnabled || this.mailEnabled) ? ' and sending' : '';
      if(loaderMsg) {
        if(this.smsEnabled && this.mailEnabled) {
          loaderMsg += ' SMS & Mail report';
        } else if(this.smsEnabled) {
          loaderMsg += ' SMS report';
        } else if(this.mailEnabled) {
          loaderMsg += ' Mail report';
        }
      }
      }

      const loading = await this.loadingController.create({
        duration: 5000,
        message: 'Please wait while updating attendance' + loaderMsg
      })
      await loading.present();
      // console.log('attendanceDetails', this.attendanceDetails);
    }

    radioGroupAllChange(event) {
      this.allOption = event.detail.value;
      this.studentList.forEach((item) => {
        this.attendance[item.rollNumber] = event.detail.value;
      });
    }

    radioGroupChange(event, rollNumber) {
      this.attendance[rollNumber] = event.detail.value;
    }
}
