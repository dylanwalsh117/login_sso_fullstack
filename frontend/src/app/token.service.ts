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
        return this.http.post('http://127.0.0.1:5000/token', token);

    }
    public getToken(): string{
        return localStorage.getItem('token');
    }

}
