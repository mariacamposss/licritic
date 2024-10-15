import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'licritiqui';

  mostrarMenus: boolean = true;

  constructor(
    public router: Router,
  ) {
    router.events.forEach((event: any) => {
      if (event instanceof NavigationStart) {

        if (event['url'] === '/login' || event['url'] === '/error' ||
          event['url'] === '**' || event['url'] === '/' || event["url"] === "error") {

          this.mostrarMenus = false;
        }
      }
    })


  }  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}