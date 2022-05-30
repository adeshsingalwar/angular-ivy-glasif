import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';
  serverName = 'default';

  getServerStatus() {
    return this.serverStatus;
  }

  allowNewServer = false;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }

  serverCreateStatus = 'No server is created';
  onCreateServer() {
    this.serverCreateStatus = 'New server is created';
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
