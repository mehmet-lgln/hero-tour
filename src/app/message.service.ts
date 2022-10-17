import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  message: string[] = []

  add(m: string): void {
    this.message.push(m)
  }

  clear(): void {
    this.message = []
  }

  constructor() { }
}
