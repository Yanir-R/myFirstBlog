import { Article } from './article';

export const ARTICLES: Article[] = [
	{
		id: 1,
		title: 'My first article',
		content: '',
		description: 'this is my first article',
		key: 'my-first-article',
		date: new Date(),
		imageUrl: 'http://angular.io/assets/images/logos/angular/angular.png'
	},

	{
		id: 2,
		title: 'My second article',
		content: '',
		description: 'also article',
		key: 'my-second-article',
		date: new Date(),
		imageUrl: 'http://angular.io/assets/images/logos/angular/angular_solidBlack.png'
	}
];
