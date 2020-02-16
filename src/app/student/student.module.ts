import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';

import { StudentPageRoutingModule } from './student.router.module';

import { StudentPage } from './student.page';
import { StudentListPage } from './studentList/student-list.page';
import { DashboardPage } from './dashboard/dashboard.page';
import { AttendancePage } from './attendance/attendance.page';
import { Ionic4DatepickerModule } from '@logisticinfotech/ionic4-datepicker';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    StudentPageRoutingModule,
    ChartsModule,
    Ionic4DatepickerModule
  ],
  declarations: [StudentPage, StudentListPage, DashboardPage, AttendancePage],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class StudentPageModule {}
