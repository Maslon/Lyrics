import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
// import { TrackData } from '../trackData.model';

@Component({
	selector: 'app-tracks',
	templateUrl: './tracks.component.html',
	styleUrls: [ './tracks.component.css' ]
})
export class TracksComponent implements OnInit {
	tracks = [];

	constructor(private dataService: DataService) {}

	ngOnInit() {
		this.dataService.tracksChanged.subscribe(tracks => {
			this.tracks = tracks;
			console.log(this.tracks);
		});
	}
}
