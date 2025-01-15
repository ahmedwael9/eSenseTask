import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserData } from '../models/user-data';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  private usersSubject = new BehaviorSubject<UserData[]>([]);
  users$ = this.usersSubject.asObservable();
  private nextId = 1;

  addUser(data: Omit<UserData, 'id'>): void {
    const currentUsers = this.usersSubject.getValue();
    const newUser: UserData = { id: this.nextId++, ...data };
    console.log(newUser);
    this.usersSubject.next([...currentUsers, newUser]);
  }

  editUser(updatedUser: UserData): void {
    const currentUsers = this.usersSubject.getValue();
    const updatedUsers = currentUsers.map((user) =>
      user.id === updatedUser.id ? { ...user, ...updatedUser } : user
    );
    this.usersSubject.next(updatedUsers);
  }
  

  deleteUser(id: number): void {
    const currentNames = this.usersSubject.getValue();
    const updatedNames = currentNames.filter((name) => name.id !== id);
    this.usersSubject.next(updatedNames);
  }
}
