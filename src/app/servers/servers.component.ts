import { Component, OnInit } from '@angular/core';
import { templateJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `
  templateUrl: './servers.component.html'
})
export class ServersComponent implements OnInit {

  allowAddNewServer = false;
  serverCreationStatus = "Not yet created";
  serverName = '';
  username = '';

  constructor() { 

    setTimeout( () => {
      this.allowAddNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onServerCreation(){
    this.serverCreationStatus = "The server is created succesfully: " + this.serverName; 
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement> event.target).value;
  }

}
