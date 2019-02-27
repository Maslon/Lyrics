import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { TrackData } from './trackData.model';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
	apiKey = environment.apiKey;
	topTracks: {}[] = [];
	tracksChanged = new Subject<{}[]>();

	constructor(private http: HttpClient) {}

	fetchTopTen() {
		return this.http
			.get(
				'https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=cs&f_has_lyrics=1&apikey=' +
					this.apiKey
			)
			.subscribe((res: TrackData) => {
				this.topTracks = res.message.body.track_list;
				this.tracksChanged.next([
					...this.topTracks
				]);
			});
	}

	fetchLyrics(trackId) {
		return this.http.get(
			`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${trackId}&apikey=${this
				.apiKey}`
		);
	}

	getTrackInfo(id) {
		return this.topTracks.find((track: any) => track.track.track_id === id);
	}
}

// https://api.musixmatch.com/ws/1.1/
// chart.artists.get?page=1&page_size=3&country=it
