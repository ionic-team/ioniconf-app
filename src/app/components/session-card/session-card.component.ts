import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AgendaFacade } from 'src/app/facades/agenda.facade';
import { Session, Speaker } from 'src/app/store/store.interfaces';

@Component({
  selector: 'app-session-card',
  templateUrl: './session-card.component.html',
  styleUrls: ['./session-card.component.scss'],
})
export class SessionCardComponent implements OnInit {
  @Input() public id: number;

  public session$: Observable<Session>;
  public photoUrls: string[] = [];

  constructor(private router: Router, private agendaFacade: AgendaFacade) {}

  ngOnInit() {
    this.session$ = this.agendaFacade.getSession(this.id);

    this.session$.subscribe((session) => {
      this.photoUrls = session.speakers.map((speaker) => speaker.photoUrl);
    });
  }

  navigateToAgendaItemPage() {
    this.router.navigate([`/agenda/${this.id}`]);
  }
}
