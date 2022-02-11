import { Component, Directive } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1> Hi NIkhil Welcome to World</h1>`,
})
export class AppComponent {}

@Component({
  selector: 'app-zippy',
  template: `Zippy`,
})
export class ZippyComponent {}

@Directive({})
export class ZippyContentDirective {}

@Directive({})
export class ZippyToggelDirective {}
