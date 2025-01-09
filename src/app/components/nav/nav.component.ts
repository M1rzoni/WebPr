import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, HttpClientModule],
  providers: [AuthService],
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

  constructor(private authService: AuthService) {}

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
      this.authService
        .login(this.loginData.email, this.loginData.password)
        .subscribe(
          (response: any) => {
            console.log('Prijava uspješna', response);
            alert('Uspješna prijava!');
            this.togglePopup();
          },
          (error: any) => {
            console.error('Greška pri prijavi', error);
            alert('Neuspješna prijava. Provjeri podatke.');
          }
        );
    } else {
      alert('Molimo unesite email i lozinku.');
    }
  }
}
