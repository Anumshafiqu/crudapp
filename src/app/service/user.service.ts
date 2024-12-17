import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export class User {
  id!: number;
  name!: string;
  email!: string;
  phone!: string;
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [];
  nextId = 1;

  constructor() { }

  getUsers(): User[] {
    return this.users;
  }

  addUser(user: User): void {
    user.id = this.nextId++;
    this.users.push(user);
  }

  updateUser(updatedUser: User): void {
    const index = this.users.findIndex(user => user.id === updatedUser.id);
    if (index !== -1) {
      this.users[index] = updatedUser;
    }
  }

  deleteUser(userId: number): void {
    const index = this.users.findIndex(user => user.id === userId);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }
}
