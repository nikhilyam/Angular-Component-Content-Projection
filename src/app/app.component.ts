import { Component, Directive } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.componenent.html',
})
export class AppComponent {}

@Component({
  selector: 'app-example-zippy',
  templateUrl: './example-zippy.template.html',
})
export class ZippyComponent {}

@Directive({})
export class ZippyContentDirective {}

@Directive({})
export class ZippyToggelDirective {}
