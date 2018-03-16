import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GlobalDataService } from './global-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private router: Router, private route: ActivatedRoute, protected gd: GlobalDataService) { 
    
  }

  doLogout(val: any): void {
    this.gd["isLogin"] = null;
    localStorage.removeItem("isLogin");
    this.router.navigate(["/"]);
  }
}
