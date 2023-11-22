import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(email: string, password: string): boolean {
    if (email === 'usuario@example.com' && password === 'contraseña') {
      return true;
    } else {
      return false;
    }
  }

  constructor() { }
}
