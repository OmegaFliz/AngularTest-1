import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloComponent } from "./hello/hello.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, HelloComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'My Angular Test';

  list = ["apple", "orange", "banana", "pineapple", "lemon"];
}
