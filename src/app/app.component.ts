import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-root',
  imports: [RouterModule, MatButtonModule],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Module Federation - Remote';
}
