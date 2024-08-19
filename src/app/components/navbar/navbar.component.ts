import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenu } from "@angular/material/menu";
import { MatMenuModule } from '@angular/material/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    AppComponent,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenu,
    MatMenuModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    constructor(private router:Router){

    }

    navigate(route:String){
        this.router.navigate([route])
    }
}
