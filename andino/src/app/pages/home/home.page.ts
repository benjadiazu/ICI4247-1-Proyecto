import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  userInfo:any;

  constructor(private userService:UserService) {}

  ngOnInit() {
    this.userService.getUserInfo().subscribe(
      data => {
        this.userInfo = data;
        console.log(this.userInfo)
      },
      error => {
        console.error('Error fetching user info', error);
      }
    );
  }
}
