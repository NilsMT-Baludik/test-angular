import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoundownComponent } from "./countdown.component";


function wait(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CoundownComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'Test-angular'
}