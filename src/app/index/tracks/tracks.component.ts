import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
	selector: 'app-tracks',
	templateUrl: './tracks.component.html',
	styleUrls: [
		'./tracks.component.css'
	]
})
export class TracksComponent implements OnInit {
	tracks = [];

	constructor(private dataService: DataService) {}

	ngOnInit() {
		this.dataService.tracksChanged.subscribe(tracks => {
			this.tracks = tracks.map((track: any) => track.track);
			console.log(tracks);
		});
	}
}
