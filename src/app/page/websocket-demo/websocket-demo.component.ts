import { Component, OnInit } from '@angular/core';
import { WebSocketService } from 'src/app/shared/web-socket.service';

@Component({
  selector: 'app-websocket-demo',
  templateUrl: './websocket-demo.component.html',
  styleUrls: ['./websocket-demo.component.css']
})
export class WebsocketDemoComponent implements OnInit {

  constructor(
    public weService: WebSocketService
  ) { }

  ngOnInit() {
  }

  handleClick() {
    this.weService.connect('ws://localhost:3000').subscribe(
      data => {
        console.log('接受成功:', data);
      },
      error => {
        console.error('接受失败', error);
      },
      () => {
        console.log('请求结束');
      }
    );
  }

  handleSend() {
    this.weService.send('这是从客户端发来的消息');
  }

}
