import {
  Component,
  Directive,
  Input,
  ContentChild,
  TemplateRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {}

@Directive({
  selector: 'button[appExampleZippyToggle]',
})
export class ZippyToggelDirective {
  @HostBinding('attr.aria-expanded') areaExpanded = this.zippy.expanded;
  @HostBinding('attr.area-controls') areControls = this.zippy.contentId;
  @HostListener('click') toggleZippy() {
    this.zippy.expanded = !this.zippy.expanded;
  }
  constructor(public zippy: ZippyComponent) {}
}

@Directive({
  selector: '[appExampleZippyContent]',
})
export class ZippyContentDirective {
  constructor(public templateRef: TemplateRef<unknown>) {}
}

let nextId = 0;
@Component({
  selector: 'app-example-zippy',
  templateUrl: './example-zippy.template.html',
})
export class ZippyComponent {
  contentId = `zippy-${nextId++}`;
  @Input() expanded = false;
  @ContentChild(ZippyContentDirective) content!: ZippyContentDirective;
}
