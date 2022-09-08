import { globalEnvironment } from 'projects/shared-libraries/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private router: Router, private htt: HttpClient) {

  }

  route(route: Array<string>) {
    this.router.navigate(route);
  }
  test() {
    var s = globalEnvironment.apiUrl
    this.htt.get(s + "/tools").subscribe(x => console.log(x));
  }
  ngOnInit(): void {
  }

}
