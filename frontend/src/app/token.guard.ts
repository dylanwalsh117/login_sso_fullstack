import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {TokenService} from './token.service';

@Injectable()
export class TokenGuard implements CanActivate {
    constructor(private tokenService: TokenService,
                private router: Router) {}
    canActivate(): boolean {
        if (!this.tokenService.isAuthenticated()){
            this.router.navigate(['login']);
            return false;

        }
        return true;
    }

}
