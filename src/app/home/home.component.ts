// import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  // import Typed from 'typed.js';

  ngOnInit(): void {
    const typingEffect = new Typed(".auto-typing", {
      strings: ['an AI Student', 'a Programmer', 'a Frontend Developer'],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      startDelay: 1000,
      backDelay: 1500,
    });
  }

}
