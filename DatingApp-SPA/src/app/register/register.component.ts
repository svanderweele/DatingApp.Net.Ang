import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  @Output() cancelCallback = new EventEmitter();
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  register() {
    console.log(this.model);
    this.authService
      .register(this.model)
      .subscribe(() => console.log('Registered!'), error => console.log(error));
  }

  cancel() {
    this.cancelCallback.emit(false);
  }
}
