
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, Location } from '@angular/common'; 

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar {
  navbarOpen = false;

  constructor(private location: Location) {} 

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  closeNavbar() {
    this.navbarOpen = false;
  }

  goBack() {
    this.location.back(); 
  }
}


