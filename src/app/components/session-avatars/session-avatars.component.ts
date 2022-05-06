import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-session-avatars',
  templateUrl: './session-avatars.component.html',
  styleUrls: ['./session-avatars.component.scss'],
})
export class SessionAvatarsComponent implements OnInit {
  @Input() urls: string[] = [];
  @Input() size = '100%';

  constructor() {}

  ngOnInit() {
    this.urls = this.urls.reverse();
  }
}
