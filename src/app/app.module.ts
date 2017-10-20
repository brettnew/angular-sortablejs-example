import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SortablejsModule } from 'angular-sortablejs';

import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		SortablejsModule
	],
	exports: [SortablejsModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
