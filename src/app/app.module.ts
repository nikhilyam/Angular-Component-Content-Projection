import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  AppComponent,
  ZippyComponent,
  ZippyContentDirective,
  ZippyToggelDirective,
} from './app.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    ZippyComponent,
    ZippyContentDirective,
    ZippyToggelDirective,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
