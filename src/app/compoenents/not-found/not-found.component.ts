import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SharedService } from 'src/app/shared.service';

@Component({
	selector: 'app-not-found',
	templateUrl: './not-found.component.html',
	styleUrls: [ './not-found.component.css' ]
})
export class NotFoundComponent implements OnInit {
	title = 'Error';
	constructor(private titleService: Title, private sharedService: SharedService) {}

	ngOnInit() {
    this.titleService.setTitle(`${this.title} - ${this.sharedService.blogTitle}`);

	}
}
