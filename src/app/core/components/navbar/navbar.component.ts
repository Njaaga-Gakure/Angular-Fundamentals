import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { navbarLinks, NavLink } from '../../../shared/utils/data';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  navLinks: NavLink[] = navbarLinks;
  testNavLinks(): void {
    console.log(this.navLinks);
  }
}
