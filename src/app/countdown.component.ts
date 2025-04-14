import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Countdown } from './countdown.service'

@Component({
  selector: 'my-countdown',
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.css',
  imports: [ CommonModule ],
})

export class CoundownComponent {
    @Input() id!: string;
    @Input() initialCount!: number;
    countdown!: Countdown;

    start() {
        this.countdown.start()
    }

    reset() {
        this.countdown.reset()
    }

    /* On create */

    ngOnInit() {
        this.countdown = new Countdown(this.id,this.initialCount)
    }
}