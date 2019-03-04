import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { TrackData } from './trackData.model';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
	apiKey = environment.apiKey;
	tracks: Array<Object> = [];
	tracksChanged = new Subject<{}[]>();
	topFetched = false;

	constructor(private http: HttpClient) {}

	fetchTopTen() {
		return this.http
			.get(
				'https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=cs&f_has_lyrics=1&apikey=' +
					this.apiKey
			)
			.subscribe((res: TrackData) => {
				this.tracks = res.message.body.track_list;
				this.tracksChanged.next([
					...this.tracks
				]);
			});
	}

	fetchLyrics(trackId) {
		return this.http.get(
			`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${trackId}&apikey=${this
				.apiKey}`
		);
	}

	searchTracks(text) {
		return this.http
			.get(
				`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${text}
				&page_size=10&page=1&s_track_rating=desc&apikey=${this.apiKey}`
			)
			.subscribe((res: TrackData) => {
				this.tracks = res.message.body.track_list;
				this.tracksChanged.next([
					...this.tracks
				]);
				console.log(this.tracks);
			});
	}

	getTracks() {
		return [
			...this.tracks
		];
	}

	getTrackInfo(id) {
		return this.tracks.find((track: any) => track.track.track_id === id);
	}
}
