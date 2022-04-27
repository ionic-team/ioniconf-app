import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  public selectedTab = 'home';
  public buttons = [
    {
      title: 'Home',
      value: 'home',
      icon: 'home',
    },
    {
      title: 'Agenda',
      value: 'agenda',
      icon: 'calendar',
    },
    {
      title: 'Speakers',
      value: 'speakers',
      icon: 'people',
    },
    {
      title: 'Sponsors',
      value: 'sponsors',
      icon: 'star',
    },
    {
      title: 'Swag',
      value: 'swag',
      icon: 'shirt',
    },
  ];

  constructor() {}

  public onTabsWillChange(evt: any) {
    this.selectedTab = evt.tab;
  }
}
