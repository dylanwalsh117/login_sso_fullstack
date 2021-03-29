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

export class UserService {
    constructor(private http: HttpClient) {
    }

    fetchUser(user): Observable<any> {
        return this.http.post('http://localhost:5000/auth', user);
    }

    addUser(user): void{
        console.log( {user});
        this.http.post('http://127.0.0.1:5000/user', user).subscribe(() => {
            console.log('New User');
        });

    }

}

