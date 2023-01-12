import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  profile: string;
  homeRoute: string = '';
  profileSubscription: Subscription;

  constructor(private helperService: HelperService) { }
  
  ngOnInit(): void {
    this.profile = localStorage.getItem('profile') || '';
    this.homeRoute = this.getHomeRoute(this.profile);
    
    this.profileSubscription = this.helperService.loginProfile.subscribe((profile) => {
      this.profile = profile;
      localStorage.setItem('profile', profile);
      this.homeRoute = this.getHomeRoute(profile);
    });
  }

  logout(): void {
    this.helperService.loginProfile.next('');
  }

  getHomeRoute(profile: string) {
    if (profile === 'patient') {
      return 'dashboard';
    } else if(profile === 'doctor') {
      return 'doctorsDashboard';
    } else {
      return '';
    }
  }

  ngOnDestroy(): void {
    this.profileSubscription.unsubscribe();
  }

}
