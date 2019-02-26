import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-tracks',
	templateUrl: './tracks.component.html',
	styleUrls: [ './tracks.component.css' ]
})
export class TracksComponent implements OnInit {
	tracks = [ { name: 'brap' }, { name: 'kacer' } ];

	constructor() {}

	ngOnInit() {}
}
