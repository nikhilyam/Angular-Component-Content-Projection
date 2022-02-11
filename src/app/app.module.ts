import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  AppComponent,
  ZippyComponent,
  ZippyContentDirective,
  ZippyToggelDirective,
} from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    ZippyComponent,
    ZippyContentDirective,
    ZippyToggelDirective,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
