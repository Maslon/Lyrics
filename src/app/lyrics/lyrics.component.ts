import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../index/data.service';
import { map } from 'rxjs/operators';

@Component({
	selector: 'app-lyrics',
	templateUrl: './lyrics.component.html',
	styleUrls: [
		'./lyrics.component.css'
	]
})
export class LyricsComponent implements OnInit {
	track;
	trackLyrics;

	constructor(private route: ActivatedRoute, private dataService: DataService) {}

	ngOnInit() {
		this.route.params.subscribe((params: Params) => {
			this.track = this.dataService.getTrackInfo(+params['id']);
			console.log(this.track);
			this.dataService
				.fetchLyrics(params['id'])
				.pipe(map((res: any) => res.message.body.lyrics.lyrics_body))
				.subscribe(lyrics => {
					this.trackLyrics = lyrics;
					console.log(this.trackLyrics);
				});
		});
	}
}
