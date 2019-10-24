import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-post-list-item',
	templateUrl: './post-list-item.component.html',
	styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
	@Input() title: string;
	@Input() content: string;
	@Input() loveIts: number;
	@Input() dontLoveIts: number;
	@Input() created_at: string;

	constructor() { 
	}

	ngOnInit() {

	}

	onLoveClick () {
		this.loveIts++;
	}

	onDepreciateClick () {
		this.dontLoveIts++;
	}

	getCurrentClass () {
		if (this.loveIts > this.dontLoveIts) {
			return "alert alert-success";
		} else if (this.loveIts < this.dontLoveIts) {
			return "alert alert-danger";
		} else {
			return "alert alert-custom";
		}
	}
}
