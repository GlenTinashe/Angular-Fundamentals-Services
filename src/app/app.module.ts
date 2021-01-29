import { TitleService } from './title.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangeTitleComponent } from './change-title/change-title.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ChangeTitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
// add providers which says "i want to provide this service to the component"
providers: [ TitleService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
