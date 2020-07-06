import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class SharedService {
	blogTitle = 'My First Blog';
	baseUrl = 'http://localhost:4200/';

	constructor() {}
}
