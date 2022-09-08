import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {

  constructor() { }
  _active: boolean = false;
  ngOnInit(): void {
  }
  checked(event: any) {
    if (event.target.checked)
      this._active = true;
    else
      this._active = false;
  }
}
