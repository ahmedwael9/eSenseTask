import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserData } from '../models/user-data';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  private usersSubject = new BehaviorSubject<UserData[]>([
    { id: 1, name: 'جميع الوزارات', details: 'لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر' },
    { id: 2, name: 'جميع الهيئات', details: 'لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر' },
    { id: 3, name: 'الامانات', details: 'لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر' },
  ]);

  users$ = this.usersSubject.asObservable();
  private nextId = this.calculateNextId();

  private calculateNextId(): number {
    const currentUsers = this.usersSubject.getValue();
    return currentUsers.length > 0 ? Math.max(...currentUsers.map((u) => u.id)) + 1 : 1;
  }

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
