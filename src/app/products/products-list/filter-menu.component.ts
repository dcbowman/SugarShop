import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


@Component({
    selector: 'app-filter-menu',
    template: `
        Search: <input type="text" [(ngModel)]="filter" />
    `
})

export class FilterMenuComponent implements OnInit {
    private _filter: string;
    @Input() get filter(){
        return this._filter;
    }

    set filter(val: string){
        this._filter = val;
        this.changed.emit(this.filter);
    }

    @Output() changed: EventEmitter<string> = new EventEmitter<string>();


    constructor () {}

    ngOnInit() {

    }
}