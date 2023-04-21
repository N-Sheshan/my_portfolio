import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor() { }

  ngOnInit(): void {
    const menuIcon = document.querySelector<HTMLElement>('#menu-icon');
    const pagelink = document.querySelector<HTMLElement>('.pagelink');
    
    if (menuIcon && pagelink) {
      menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        pagelink.classList.toggle('active');
      };
      menuIcon.classList.remove('bx-x');
      pagelink.classList.remove('active');
    }
   
  }

}
