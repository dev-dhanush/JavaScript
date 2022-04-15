import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToCapsPipe } from './pipes';

@NgModule({
  declarations: [
    AppComponent,
    ToCapsPipe
  ],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
