import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isRegisterMode: boolean = false;

  constructor() {}

  ngOnInit() {}

  enableRegisterMode() {
    this.isRegisterMode = true;
  }
  disableRegisterMode() {
    this.isRegisterMode = false;
  }
}
