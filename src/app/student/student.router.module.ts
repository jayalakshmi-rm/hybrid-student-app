import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentPage } from './student.page';
import { StudentListPage } from './studentList/student-list.page';
import { DashboardPage } from './dashboard/dashboard.page';
import { AttendancePage } from './attendance/attendance.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
    children: [
      {
        path: 'details/:rollNumber',
        component: StudentPage
      },
      {
        path: 'list',
        component: StudentListPage
      },
      {
        path: 'attendance',
        component: AttendancePage
      },
      {
        path: '',
        redirectTo: '/student/list',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})

export class StudentPageRoutingModule {}
