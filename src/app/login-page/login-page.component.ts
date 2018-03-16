import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from '../global-data.service';
import {FormControl} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  txtUserName = new FormControl();
  txtPassword = new FormControl();
  chkRemember = new FormControl();

  redirectTo: string;
  private sub: any;

  constructor(private router: Router, private route: ActivatedRoute, protected gd: GlobalDataService) { 
    
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.redirectTo = params['redirectTo']; // (+) converts string 'id' to a number
   });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  doLogin(val: any): void {
    if (this.txtUserName.value == "admin" && this.txtPassword.value == "admin") {
      this.gd["isLogin"] = true;

      if (this.chkRemember.value == true)
        localStorage.setItem("isLogin", "true");
      
      this.router.navigate(["/" + this.redirectTo]);
    }
  }

}
