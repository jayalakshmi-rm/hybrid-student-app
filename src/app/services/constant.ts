import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class Constants {
    public static MONTH_ARRAY: string[] =  ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug','Sep', 'Oct', 'Nov', 'Dec'];
    public static STUDENT_DETAILS = {
        '16010001': {
            'name': 'Dhanalakshmi',
              '1': {
                present: 133,
                absent: 13,
                holidays: 37
              },
              '2': {
                present: 140,
                absent: 5,
                holidays: 35
              },
              '3': {
                present: 144,
                absent: 10,
                holidays: 37
              },
              '4': {
                present: 123,
                absent: 25,
                holidays: 35
              },
              '5': {
                present: 144,
                absent: 3,
                holidays: 37
              },
              '6': {
                present: 110,
                absent: 5,
                holidays: 15
              }
            },
          '16010002': {
            'name': 'Rajeshwari',
              '1': {
                present: 133,
                absent: 13,
                holidays: 37
              },
              '2': {
                present: 140,
                absent: 5,
                holidays: 35
              },
              '3': {
                present: 144,
                absent: 10,
                holidays: 37
              },
              '4': {
                present: 123,
                absent: 25,
                holidays: 35
              },
              '5': {
                present: 144,
                absent: 3,
                holidays: 37
              },
              '6': {
                present: 110,
                absent: 5,
                holidays: 15
              }
            },
          '16010003': {
              'name': 'Karthik',
              '1': {
                present: 133,
                absent: 13,
                holidays: 37
              },
              '2': {
                present: 140,
                absent: 5,
                holidays: 35
              },
              '3': {
                present: 144,
                absent: 10,
                holidays: 37
              },
              '4': {
                present: 123,
                absent: 25,
                holidays: 35
              },
              '5': {
                present: 144,
                absent: 3,
                holidays: 37
              },
              '6': {
                present: 110,
                absent: 5,
                holidays: 15
              }
            },
          '16010004': {
              'name': 'Preethi',
              '1': {
                present: 133,
                absent: 13,
                holidays: 37
              },
              '2': {
                present: 140,
                absent: 5,
                holidays: 35
              },
              '3': {
                present: 144,
                absent: 10,
                holidays: 37
              },
              '4': {
                present: 123,
                absent: 25,
                holidays: 35
              },
              '5': {
                present: 144,
                absent: 3,
                holidays: 37
              },
              '6': {
                present: 110,
                absent: 5,
                holidays: 15
              }
            }
    }

    public static STUDENT_LIST = [{
        name: 'Dhanalakshmi',
        rollNumber: '16010001'
    },
    {
        name: 'Rajeshwari',
        rollNumber: '16010002'
    },
    {
        name: 'Karthik',
        rollNumber: '16010003'
    },
    {
        name: 'Preethi',
        rollNumber: '16010004'
    }];

    public static ATTENDANCE_DETAILS = [
        {
            'date': '2020-01-20',
            '16010001': 'P',
            '16010002': 'P',
            '16010003': 'P',
            '16010004': 'P'
        },
        {
            'date': '2020-01-01',
            '16010001': 'H',
            '16010002': 'H',
            '16010003': 'H',
            '16010004': 'H'
        },
        {
            'date': '2020-01-21',
            '16010001': 'P',
            '16010002': 'P',
            '16010003': 'A',
            '16010004': 'P'
        }
    ];
}