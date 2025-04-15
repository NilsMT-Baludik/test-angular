import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
	selector: 'summary',
	templateUrl: './summary.component.html',
	styleUrl: './summary.component.css'
})
export class SummaryComponent {
	constructor(private location: Location) {}

	date?: Date = undefined

	ngOnInit() {
		const state = this.location.getState() as { date: string }

		if (state?.date) {
			this.date = new Date(state?.date);
		}
	}
}
