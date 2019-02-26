import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IndexComponent } from './index/index.component';
import { TracksComponent } from './index/tracks/tracks.component';
import { SearchComponent } from './index/search/search.component';

@NgModule({
	declarations: [ AppComponent, NavbarComponent, IndexComponent, TracksComponent, SearchComponent ],
	imports: [ BrowserModule, AppRoutingModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
