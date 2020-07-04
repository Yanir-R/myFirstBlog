import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/article';
import { ARTICLES } from 'src/app/mock-articles';
import { ArticleService } from 'src/app/article.service';

@Component({
	selector: 'app-article-list',
	templateUrl: './article-list.component.html',
	styleUrls: [ './article-list.component.css' ]
})
export class ArticleListComponent implements OnInit {
	articles: Article[] = [];

	constructor(private articleService: ArticleService) {}

	ngOnInit() {
		this.getArticles();
	}

	getArticles(): void {
		this.articleService.getArticles().subscribe((articles) => (this.articles = articles));
	}
}
