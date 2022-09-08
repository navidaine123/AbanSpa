
import { Component, OnInit } from '@angular/core';
import { SignalRService, ToolsService } from 'projects/shared-libraries/src/public-api';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

  tools: Array<any> | null = []
  constructor(signalR: SignalRService, private toolsService: ToolsService) {
    // toolsService.getSnapShot().subscribe(x => {
    //   this.tools = x.match(/.{1,2}/g)
    // })
    signalR.startConnection('test').subscribe(x => console.log(x));
    signalR.testListener('done').subscribe(x => {
      this.tools = x.match(/.{1,2}/g)
    })
    this.tools = "1f0t1f".match(/.{1,2}/g)
  }

  ngOnInit(): void {

  }

}
