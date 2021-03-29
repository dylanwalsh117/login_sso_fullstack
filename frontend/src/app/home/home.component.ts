import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {TokenService} from '../token.service';
import {ActivatedRoute, Router} from '@angular/router';
import {getToken} from 'codelyzer/angular/styles/cssLexer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userService: UserService,
              private tokenService: TokenService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
      const jwtToken = localStorage.getItem('token');
      let userAuth = false;

      this.tokenService.validateToken(jwtToken).subscribe(
          response => {
              userAuth = response.login;
          });

      // if (jwtToken == null ||  !userAuth){
      //     this.router.navigate(['/login']).then();
      // }

  }

}
