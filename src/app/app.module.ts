import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BorderModule } from 'projects/libs-test/src/lib/border/border.module';
import { ListModule } from 'projects/libs-test/src/lib/list/list.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ListModule,
    BorderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
