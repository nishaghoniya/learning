import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

export class User {
  public name!: string;
  public email!: string;
  public education!: string;
  public feedback!: string;
}
@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {
  model = new User();
  isOpen: boolean = false

  constructor() { }

  onSubmit(data: any) {
    if (data.name)
      this.isOpen = true

  }
}
