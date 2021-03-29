import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};


@Injectable({
    providedIn: 'root'
})

export class TokenService {
    constructor(private http: HttpClient) {
    }

    validateToken(token): Observable<any> {
        // const headers = { Authorization: `Bearer ${this.getToken()}`};

        return this.http.get('http://127.0.0.1:5000/token');

    }
    public getToken(): string{
        return localStorage.getItem('token');
    }

}
