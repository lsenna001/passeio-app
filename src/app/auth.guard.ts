import {CanActivateFn, Router} from '@angular/router';
import {AuthgoogleService} from './authgoogle.service';
import {inject} from '@angular/core';
import {Profile} from './landingpage/profile.model';

export const authGuard: CanActivateFn = (route, state) => {
  const loginService = inject(AuthgoogleService);
  const router = inject(Router);

  const loggedProfile: Profile = loginService.getLoggedProfile();

  if(loggedProfile){
    return true
  }

  router.navigate(['']);

  return false;
};
