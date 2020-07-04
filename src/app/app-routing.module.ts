import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleListComponent } from './compoenents/article-list/article-list.component';
import { AboutComponent } from './compoenents/about/about.component';
import { ArticleComponent } from './compoenents/article/article.component';

const routes: Routes = [
	{ path: 'articles', component: ArticleListComponent },
	{ path: 'about', component: AboutComponent },
	{ path: '', component: ArticleListComponent },
	{ path: ':key', component: ArticleComponent }

];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
