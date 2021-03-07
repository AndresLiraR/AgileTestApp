import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  UserIsLogged: boolean = false;
  constructor(private AuthenticationService: AuthenticationService) {}
  ngOnInit() {
    this.AuthenticationService.authenticateUser()
      .pipe(take(1))
      .subscribe((token: any) => {
        localStorage.setItem('token', JSON.stringify(token.token));
        this.UserIsLogged = true;
      });
  }
}
