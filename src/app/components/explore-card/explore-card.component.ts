import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore-card',
  templateUrl: './explore-card.component.html',
  styleUrls: ['./explore-card.component.scss'],
})
export class ExploreCardComponent implements OnInit {
  @Input() public title: string;
  @Input() public description: string;
  @Input() public color: string;
  @Input() public route: string;

  constructor() {}

  ngOnInit() {}
}
