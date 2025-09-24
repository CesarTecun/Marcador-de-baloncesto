import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  abierto = false;
  temaClaro = false;

  toggle(){ this.abierto = !this.abierto; }
  close(){ this.abierto = false; }

  refrescar(){ location.reload(); }

  toggleTema(){
    this.temaClaro = !this.temaClaro;
    document.documentElement.setAttribute(
      'data-theme',
      this.temaClaro ? 'light' : 'dark'
    );
  }

  logout(){
    // conecta con tu AuthService si ya lo tienes
    console.log('Cerrar sesión');
  }
}
