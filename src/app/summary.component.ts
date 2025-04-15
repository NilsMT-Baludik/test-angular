import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'summary',
	templateUrl: './summary.component.html',
	styleUrl: './summary.component.css'
})
export class SummaryComponent {
	constructor(private route: ActivatedRoute) {}

	date?: Date = undefined

	ngOnInit() {

		const rawDate = history.state.date;
		if (rawDate) {
			this.date = new Date(rawDate);
		}
	}
}
