import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-module2-container',
  templateUrl: './module2-container.component.html',
  styleUrls: ['./module2-container.component.scss']
})
export class Module2ContainerComponent {

  constructor(private service: UserService) { }

  users: Array<User>;
  user: User;

  searchUsers(page: number): void {
    this.users = null;
    
    this.service.getBooks(page).subscribe((response: any) => {
      if (response.data.length != 0) {
        this.users = response.data;
        this.user = response.data[0];
      } else {
        alert("Número de página inválido. El servicio sólo funciona con 1 y 2.");
      }

    }, (error: any) => {
      console.log(error);
    });
  }

}