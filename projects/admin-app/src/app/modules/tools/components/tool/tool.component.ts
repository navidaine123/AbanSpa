import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.scss']
})
export class ToolComponent implements OnInit, OnChanges {
  @Input() type: string = 't';
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    this._active = this.type[0] == '0' ? false : true
  }
  ngOnInit(): void {
  }
  _active: boolean = false;

  get active_class() {
    if (this._active) {
      switch (this.type[1]) {
        case 'f':
          return 'active-fan';
        default:
          return 'active-tool'
      }
    }
    return '';
  }
  get active(): boolean {
    return this._active;
  }
  checked(event: any) {
    if (event.target.checked)
      this._active = true;
    else
      this._active = false;
  }


}
