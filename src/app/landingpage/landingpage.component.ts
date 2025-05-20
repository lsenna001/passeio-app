import { Component } from '@angular/core';
import {Profile} from './profile.model';
import {Router} from '@angular/router';
import {AuthgoogleService} from '../authgoogle.service';

@Component({
  selector: 'app-landingpage',
  standalone: false,
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {
  profile: Profile | undefined;

  constructor(
    private router: Router,
    private loginService: AuthgoogleService
  ) {
  }

  navegar(){
    this.router.navigate(['/paginas/galeria']);
  }

  logarComGoogle() {
    this.loginService.login();
  }

  estaLogado(): boolean {
    const dadosGoogle = this.loginService.getLoggedProfile();
    this.profile = dadosGoogle;
    return !!this.profile;
  }
}
