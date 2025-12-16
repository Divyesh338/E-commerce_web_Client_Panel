import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUser: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private isloggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private _router: Router) { }

  get currentUser$() {
    return this.currentUser.asObservable();
  }

  get isLoggedIn$() {
    return this.isloggedIn.asObservable();
  }

  authLogin(res: any) {
    localStorage.setItem('userDetails', JSON.stringify(res));
    this.currentUser.next(res);
    this.isloggedIn.next(true);
    this._router.navigate(['dashboard/default']);
  }

  logout() {
    this.currentUser.next(null);
    this.isloggedIn.next(false);
  }
}
