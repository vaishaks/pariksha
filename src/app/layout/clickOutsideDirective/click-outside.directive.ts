import {Directive, ElementRef, Output, EventEmitter, HostListener} from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[clickOutside]'
})
export class ClickOutsideDirective {
    @Output()
    public clickOutside = new EventEmitter();

    constructor(private _elementRef: ElementRef) {}

    @HostListener('document:click', ['$event.target'])
    public onClick(targetElement) {
        if (!targetElement) {
            return;
        }
        const clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.clickOutside.emit(event);
        }
    }
}
