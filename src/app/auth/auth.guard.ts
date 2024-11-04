import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(): boolean {
        const user = JSON.parse(localStorage.getItem('user') || 'null');

        // If user is not logged in, redirect to login
        if (!user) {
            this.router.navigate(['/login']);
            return false;
        }

        return true;
    }
}

@Injectable({
    providedIn: 'root'
})
export class LoginGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(): boolean {
        const user = JSON.parse(localStorage.getItem('user') || 'null');

        // If user is logged in, redirect to dashboard
        if (user) {
            this.router.navigate(['/']);
            return false;
        }

        return true;
    }
}
