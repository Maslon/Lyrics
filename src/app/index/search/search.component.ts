import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: [
		'./search.component.css'
	]
})
export class SearchComponent implements OnInit {
	searchValue: string;

	constructor(private dataService: DataService) {}

	ngOnInit() {}

	onSubmit() {
		this.dataService.searchTracks(this.searchValue);
	}
}
