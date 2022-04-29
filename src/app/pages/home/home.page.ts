import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  exploreCards = [
    {
      title: 'Agenda',
      description:
        'Browse all the scheduled presentations and talks for the event on May 25th',
      color: '#3A00AA',
      route: '/agenda',
    },
    {
      title: 'Speakers',
      description:
        // eslint-disable-next-line @typescript-eslint/quotes
        "See the industry experts and leaders speaking at this year's conference",
      color: '#1C4DFF',
      route: '/speakers',
    },
    {
      title: 'Sponsors',
      // eslint-disable-next-line @typescript-eslint/quotes
      description: "Explore the sponsors at this year's event",
      color: '#2BB0F3',
      route: '/sponsors',
    },
    {
      title: 'Swag',
      description:
        'Sign up for a chance to get free Ionic and Ioniconf 22 swag',
      color: '#B165E5',
      route: '/swag',
    },
  ];

  builtWith = [
    {
      title: 'Ionic Framework',
      href: 'https://ionicframework.com/',
    },
    {
      title: 'Ionic Capacitor',
      href: 'https://capacitorjs.com/',
    },
    {
      title: 'Ionic Appflow',
      href: 'https://ionic.io/appflow',
    },
  ];

  constructor() {}

  ngOnInit() {}

  async openLink(url: string) {
    await Browser.open({
      url,
    });
  }
}
