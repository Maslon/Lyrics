import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LyricsComponent } from './lyrics/lyrics.component';

const routes: Routes = [
	{ path: '', component: IndexComponent },
	{ path: 'lyrics/:id', component: LyricsComponent }
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule {}
