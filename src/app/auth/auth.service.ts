import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import userData from './users.json';


@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private userSubject: BehaviorSubject<any>;
    public user: Observable<any>;

    constructor(
        private router: Router,
    ) {
        let userStorage: any = localStorage.getItem('user');
        this.userSubject = new BehaviorSubject<any>(JSON.parse(userStorage));
        this.user = this.userSubject.asObservable();
    }

    public get userValue(): any {
        return this.userSubject.value;
    }

    login(username: string, password: string): any {
        const user = userData.find(u => u.username === username && u.password === password);
        if (user) {
            const userData = {
                username: user.username,
                role: user.role,
                roleName: user.role_name,
                token: '123456789'
            };
            this.userSubject.next(userData);
            localStorage.setItem('user', JSON.stringify(userData));
            return userData;
        } else {
            return false;
        }
    }
    logout() {
        this.userSubject.next(null);
        localStorage.removeItem('user');
        this.router.navigate(['/login']);
    }
}
