import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-username-valid-check',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './username-valid-check.component.html',
  styleUrl: './username-valid-check.component.css'
})
export class UsernameValidCheckComponent {
  username: string = '';

  eredmeny: boolean | null = null;

  ellenorzes() {
      const regex = /^[a-zA-Z0-9_]{4,15}$/;
      this.eredmeny = regex.test(this.username);
    }
  }