import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../login/service/auth.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  navLinks: any[];
  activeLinkIndex = -1;

  constructor(private readonly router: Router,private readonly authservice: AuthService) {
    this.navLinks = [
      {
        label: 'Home',
        link: './home',
        index: 0,
        icon:'dashboard'
      },
      {
        label: 'Employee',
        link: './employee',
        index: 1,
        icon:'person'
      }
    ];
   }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }

  logout(){
    this.authservice.logout();
    this.router.navigateByUrl('/login');
  }

}
