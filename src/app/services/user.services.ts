import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserServices {
    private userData = {};

    public setUserData(data) {
        this.userData = data;
    }

    public getUserData() {
        return this.userData;
    }
}