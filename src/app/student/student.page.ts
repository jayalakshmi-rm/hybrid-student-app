import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet, monkeyPatchChartJsTooltip, monkeyPatchChartJsLegend } from 'ng2-charts';
import { Constants } from '../services/constant';
import { LoadingController } from '@ionic/angular';
import { UserServices } from '../services/user.services';

class ChartModel {
  present: number;
  absent: number;
  holidays: number;
}

@Component({
  selector: 'app-student',
  templateUrl: 'student.page.html',
  styleUrls: ['student.page.scss']
})
export class StudentPage {
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = ['Present', 'Absent', 'Holiday'];
  public pieChartData: SingleDataSet = [300, 20, 500];
  public pieChartType: ChartType = 'doughnut';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public present = 0;
  public absent = 0;
  public holidays = 0;
  public total = 0;
  public monthData = Constants.MONTH_ARRAY;
  public selectedMonth: string;
  public selectedYear = '2020';
  today = new Date();
  studentDetails: any = {};
  chartObj: ChartModel;
  dataCategory: string = '6';
  userObj = {};
  
  constructor(private activatedRoute: ActivatedRoute, private loadingController:LoadingController, private userService: UserServices) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
    this.chartObj = new ChartModel();
   }

  ngOnInit() {
    this.userObj = this.userService.getUserData();
    this.activatedRoute.params.subscribe(params => {           
      console.log(params['rollNumber']);
      this.studentDetails = Constants.STUDENT_DETAILS[params['rollNumber']];
   });
    this.selectedMonth = this.monthData[this.today.getMonth()];
    // this.chartObj.present = 200;
    // this.chartObj.absent = 20;
    // this.chartObj.holidays = 12;
    // this.pieChartLabels[0] = ['Present', '200 days'];
    // this.pieChartLabels[1] = ['Absent', '20 days'];
    // this.pieChartLabels[2] = ['Holidays', '12 days'];
    // this.pieChartData[0] = this.calculatePercentage('present');
    // this.pieChartData[1] = this.calculatePercentage('absent');
    // this.pieChartData[2] = this.calculatePercentage('holidays');
    this.updateChart(this.dataCategory);
  }

  async showSendingMsg(event) {
    let loaderMsg = (event === 'sms') ? 'SMS' : 'Mail';
    const loading = await this.loadingController.create({
      duration: 5000,
      message: 'Please wait while sending ' + loaderMsg
    })
    await loading.present();
  }

  calculatePercentage(data) {
    let percent;
    this.total = (this.chartObj.present + this.chartObj.absent + this.chartObj.holidays);
    percent = (this.chartObj[data]/this.total)*100;
    return Math.floor(percent*100)/100;
  }

  handleCategory(event) {
    if(event == 'month') {
      this.selectedMonth = this.monthData[this.today.getMonth()];
      this.updateChart(this.selectedMonth);
    } else if(event == 'year') {
      this.selectedYear = '2020';
      this.updateChart(this.selectedYear);
    } else {
     this.updateChart(event);
    }
  }

  updateChart(event) {
    this.chartObj = this.studentDetails[event];

    if(this.chartObj) {
    this.pieChartLabels[0] = ['Present', this.chartObj.present+' days'];
    this.pieChartLabels[1] = ['Absent', this.chartObj.absent+' days'];
    this.pieChartLabels[2] = ['Holidays', this.chartObj.holidays+' days'];
    this.pieChartData[0] = this.calculatePercentage('present');
    this.pieChartData[1] = this.calculatePercentage('absent');
    this.pieChartData[2] = this.calculatePercentage('holidays');
    }
  }
}
