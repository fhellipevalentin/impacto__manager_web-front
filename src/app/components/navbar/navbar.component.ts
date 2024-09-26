import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    AppComponent,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  user = new User();

  ngOnInit() {
    if(sessionStorage.getItem('userdetails')){
      this.user = JSON.parse(sessionStorage.getItem('userdetails')!);
    }
  }

  constructor(private router:Router){

    }

    navigate(route:String){
        this.router.navigate([route])
    }

    logout() {
      window.sessionStorage.setItem("userdetails", "");
      this.router.navigate(['/login'])
    }
}
