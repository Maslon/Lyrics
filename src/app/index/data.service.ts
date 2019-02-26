import { Injectable } from '@angular/core';
// import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class DataService {
	// apiKey = environment.apiKey;

	constructor(private http: HttpClient) {}
}
