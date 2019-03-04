import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './index/data.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [
		'./app.component.css'
	]
})
export class AppComponent implements OnInit {
	constructor(private router: Router, private dataService: DataService) {}
	title = 'Lyrics-App';

	ngOnInit(): void {
		this.router.navigate([
			'/'
		]);
		this.dataService.fetchTopTen();
	}
}
