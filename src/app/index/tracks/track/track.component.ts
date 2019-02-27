import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-track',
	templateUrl: './track.component.html',
	styleUrls: [ './track.component.css' ]
})
export class TrackComponent implements OnInit {
	@Input() track;

	constructor() {}

	ngOnInit() {}
}
