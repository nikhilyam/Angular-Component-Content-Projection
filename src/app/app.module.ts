import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  AppComponent,
  ZippyComponent,
  ZippyContentDirective,
  ZippyToggelDirective,
} from './app.component';
import { ZippayBasicComponent } from './zippy-basic/zippy-basic.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    ZippyComponent,
    ZippyContentDirective,
    ZippyToggelDirective,
    ZippayBasicComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
