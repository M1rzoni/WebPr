import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  menuOpen = false;
  isPopupOpen = false;
  loginData = {
    email: '',
    password: '',
  };

  togglePopup() {
    this.isPopupOpen = !this.isPopupOpen;
  }
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  closeMenu() {
    this.menuOpen = false;
  }

  login() {
    if (this.loginData.email && this.loginData.password) {
      alert(`Uspješna prijava: ${this.loginData.email}`);
      this.togglePopup();
    } else {
      alert('Molimo unesite email i lozinku.');
    }
  }
}
