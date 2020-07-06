import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from '../app/compoenents/nav-bar/nav-bar.component';
import { FooterComponent } from '../app/compoenents/footer/footer.component';
import { ArticleListComponent } from '../app/compoenents/article-list/article-list.component';
import { AboutComponent } from '../app/compoenents/about/about.component';

@NgModule({
	declarations: [ AppComponent, NavBarComponent, FooterComponent, ArticleListComponent, AboutComponent ],
	imports: [ BrowserModule.withServerTransition({ appId: 'serverApp' }), AppRoutingModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
