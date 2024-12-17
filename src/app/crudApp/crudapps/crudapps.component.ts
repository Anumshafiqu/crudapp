import { Component } from '@angular/core';
//  import { User } from './items';
import { UserService } from '../../service/user.service';
export class User {
  id!: number;
  name!: string;
  email!: string;
  phone!: string;
}

@Component({
  selector: 'app-crudapps',
  templateUrl: './crudapps.component.html',
  styleUrl: './crudapps.component.css'
})
export class CrudappsComponent {
  users: User[] = [];
  user: User = { id: 0, name: '', email: '', phone: '' };
  isEditing = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

  addUser(): void {
    this.userService.addUser({ ...this.user });
    this.resetForm();
  }

  editUser(user: User): void {
    this.user = { ...user };
    this.isEditing = true;
  }

  updateUser(): void {
    this.userService.updateUser(this.user);
    this.resetForm();
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id);
  }

  resetForm(): void {
    this.user = { id: 0, name: '', email: '', phone: '' };
    this.isEditing = false;
  }

}
