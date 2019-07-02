import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  isExpanded = false;
  submitted = false;

  loginUsername: string;
  loginPword: string;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  onSubmit(loginForm) { this.submitted = true;}

  updateField(e) {
		//this.setState({[e.target.name]: e.target.value});
  }
  
  handleLogin(e) {
    e.preventDefault();
 
    const websiteToGet = 'http://localhost:4000/api/authenticateLogin';
    const init = {
      method: 'POST',
      body: {user: 'test',
             pass: 'testp'
            }
    };

    fetch(
      websiteToGet,
      //init
    )
    .then(response => {
      return response.json();
    })
    .then(responseData => {
      const token = responseData.token;
      const userId = responseData.userID;
      console.log(responseData);
    });
  };
}
