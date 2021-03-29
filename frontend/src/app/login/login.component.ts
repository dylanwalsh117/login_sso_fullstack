import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../user.service';
import {TokenService} from '../token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    angularForm: FormGroup;


    constructor(
        private router: Router,
        private userService: UserService,
        private tokenService: TokenService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.angularForm = new FormGroup({
            email: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required)
        });
    }
    onSubmit(user): void {
        let login;
        this.userService.fetchUser(user).subscribe(response => {
            console.log(response);
            login = response.login;
            if (login === true) {
                localStorage.setItem('token', response.token);
                this.router.navigateByUrl('/home');
            } else {
                console.log(response.response);
            }
        });
    }
    btnClick(link): void{
        this.router.navigate([link]);
    }
}

