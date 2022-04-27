import { CompaniesState } from './companies/companies.interfaces';
import { IonicEventState } from './ionic-event/ionic-event.interfaces';
import { SessionsState } from './sessions/sessions.interfaces';
import { SpeakersState } from './speakers/speakers.interfaces';
import { SponsorsState } from './sponsors/sponsors.interfaces';

export interface AppState {
  event: IonicEventState;
  companies: CompaniesState;
  sessions: SessionsState;
  speakers: SpeakersState;
  sponsors: SponsorsState;
}
