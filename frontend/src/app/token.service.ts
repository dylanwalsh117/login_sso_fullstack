import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};


@Injectable({
    providedIn: 'root'
})

export class TokenService {
    constructor(private http: HttpClient) {}
    jwtHelper = new JwtHelperService();


    validateToken(token): Observable<any> {
        return this.http.get('http://127.0.0.1:5000/token');

    }
    public getToken(): string{
        return localStorage.getItem('token');
    }
    public isAuthenticated(): boolean {
        const token = localStorage.getItem('token');
        // Check whether the token is expired and return
        // true or false
        return !this.jwtHelper.isTokenExpired(token);
    }

}
