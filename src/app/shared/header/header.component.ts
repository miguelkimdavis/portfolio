import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMobileMenuOpen: boolean = false;

  toggleMobileMenu(){
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(){
    this.isMobileMenuOpen = false;
  }
}
