import { Component, ViewChild } from '@angular/core';
import { CoundownComponent } from "./countdown.component";

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CoundownComponent],
  templateUrl: './countdown.page.html',
  styleUrl: './countdown.page.css'
})


export class CountdownPage {
  //retrieve router
  constructor(private router: Router) {}
  
  @ViewChild('red') red!: CoundownComponent;

  title = 'Le joli décompte'

  async onCountdownOver(id: string, date?: Date) {
    if (id === "blue" && date !== null) { //if its blue then start red, but not the other way around
      await this.red.start()

      this.router.navigate(['/summary'], {
        state: { 
          date: date!.toISOString() 
        }
      })
    }
  }
}