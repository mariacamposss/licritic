import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
constructor(private router : Router){

}
ngOnInit(): void{

}


Deslogar(){
  localStorage.clear();
  this.router.navigate(['login']);
}
}
