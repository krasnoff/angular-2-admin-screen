import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from '../global-data.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(protected gd: GlobalDataService) { 
    
  }

  ngOnInit() {
  }

}
