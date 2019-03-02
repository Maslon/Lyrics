import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-tracks',
	templateUrl: './tracks.component.html',
	styleUrls: [
		'./tracks.component.css'
	]
})
export class TracksComponent implements OnInit, OnDestroy {
	tracks = [];
	trackSub: Subscription;

	constructor(private dataService: DataService) {}

	ngOnInit() {
		this.trackSub = this.dataService.tracksChanged.subscribe(tracks => {
			this.tracks = tracks.map((track: any) => track.track);
			// console.log(this.tracks);
		});
	}

	ngOnDestroy() {
		this.trackSub.unsubscribe();
	}
}
