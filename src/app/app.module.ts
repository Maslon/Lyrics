import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IndexComponent } from './index/index.component';
import { TracksComponent } from './index/tracks/tracks.component';
import { SearchComponent } from './index/search/search.component';
import { TrackComponent } from './index/tracks/track/track.component';

@NgModule({
	declarations: [ AppComponent, NavbarComponent, IndexComponent, TracksComponent, SearchComponent, TrackComponent ],
	imports: [ BrowserModule, AppRoutingModule, HttpClientModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
