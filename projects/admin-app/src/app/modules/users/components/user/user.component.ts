import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {
  userId: any;


  constructor(private route: ActivatedRoute) {
    route.params.subscribe(x => {
      this.userId = x['id']
      console.log(this.userId)
    })
  }

  ngOnInit(): void {
  }

}
