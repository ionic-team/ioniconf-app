/* eslint-disable @typescript-eslint/naming-convention */

export enum SponsorTier {
  PLATINUM = 'platinum',
  GOLD = 'gold',
  SILVER = 'silver',
  BRONZE = 'bronze',
}

export interface IonicEvent {
  id: string;
  title: string;
  date: Date;
  sessions: Session[];
  speakers: Speaker[];
  companies: Company[];
  sponsors: Sponsor[];
  swagRules: any;
}

export interface Session {
  id: number;
  title: string;
  description: string;
  speakers: Speaker[];
  startTime: Date;
  endTime: Date;
}

export interface Speaker {
  id: number;
  fullName: string;
  firstName: string;
  lastName: string;
  company: Company;
  role: string;
  photoUrl: string;
  biography: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
}

export interface Company {
  id: number;
  name: string;
  logoUrl: string;
}

export interface Sponsor extends Company {
  accentColor: string;
  tier: SponsorTier;
  biography: string;
  homepage: string;
}

export class HubspotFormData {
  firstname: string;
  lastname: string;
  email: string;
  job_function: string;
  topic_of_interest: string[];
  enter_to_win: 'Yes' | 'No';
  address: string;
  city: string;
  zip: string;
  country_pl_: string;
  state?: string;
  t_shirt_size: string;
}
