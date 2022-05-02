import {
  Company,
  IonicEvent,
  Session,
  Speaker,
  Sponsor,
} from 'src/app/store/store.interfaces';
import { PrismicResponseObject } from '../prismic.service';
import {
  datetimeAfterDuration,
  parseDate,
  parseISODate,
} from 'src/app/services/helpers/mapping-utilities';

/**
 * API helper used to create a base Speaker object.
 *
 * @param eventObj Prismic's Ionic Event Item
 */
// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function mapPrismicIonicEventItem(
  eventObj: PrismicResponseObject
): IonicEvent {
  if (!eventObj) {
    throw new Error('No event data.');
  }

  const eventData = eventObj.data;

  const companies: Company[] = (eventData.event_companies || []).map(
    (c: PrismicResponseObject) => mapPrismicCompanyItem(c)
  );
  const speakers: Speaker[] = (eventData.event_speakers || []).map(
    (s: PrismicResponseObject) => mapPrismicSpeakerItem(s, companies)
  );
  const sessions: Session[] = (eventData.event_sessions || []).map(
    (s: PrismicResponseObject) => mapPrismicSessionItem(s, speakers)
  );

  const event: IonicEvent = {
    id: eventObj.uid,
    title: eventData.event_title[0].text,
    date: parseDate(eventData.event_date, 'yyyy-MM-dd'),
    sessions,
    speakers,
    sponsors: (eventData.event_sponsors || []).map((s: PrismicResponseObject) =>
      mapPrismicSponsorItem(s)
    ),
    companies,
  };

  return event;
}

/**
 * API helper used to create a base Speaker object.
 *
 * @param sessionObj Prismic's Session Item
 */
// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
function mapPrismicSessionItem(
  sessionObj: PrismicResponseObject,
  speakers: Speaker[]
): Session {
  if (!sessionObj) {
    throw new Error('No speaker data.');
  }

  const speakerIds: number[] = sessionObj.session_speakers.length
    ? sessionObj.session_speakers[0].text
        .split(',')
        .map((id) => Number(id.trim()))
    : [];

  const sessionSpeakers: Speaker[] = speakers.filter(({ id }) =>
    speakerIds.includes(id)
  );

  const session: Session = {
    id: sessionObj.session_id,
    title: sessionObj.session_title,
    description: sessionObj.session_description.length
      ? sessionObj.session_description[0].text
      : '',
    speakers: sessionSpeakers,
    startTime: parseISODate(sessionObj.session_datetime),
    endTime: datetimeAfterDuration(
      parseISODate(sessionObj.session_datetime),
      Number(sessionObj.session_duration)
    ),
  };

  return session;
}

/**
 * API helper used to create a base Speaker object.
 *
 * @param speakerObj Prismic's Speaker Item
 */
// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
function mapPrismicSpeakerItem(
  speakerObj: PrismicResponseObject,
  companies: Company[]
): Speaker {
  if (!speakerObj) {
    throw new Error('No speaker data.');
  }

  const company: Company = companies.find(
    (c) => c.id === Number(speakerObj.company_id)
  );

  const speaker: Speaker = {
    id: speakerObj.speaker_id,
    fullName: speakerObj.speaker_name,
    firstName: speakerObj.speaker_first_name,
    lastName: speakerObj.speaker_last_name,
    company,
    role: speakerObj.speaker_role,
    photoUrl:
      speakerObj.speaker_photo?.url || 'assets/ionic-blue-bkg-logo.jpeg',
    biography: speakerObj.speaker_bio[0]?.text.trim() || '',
    linkedin: speakerObj.speaker_linkedin?.url,
    twitter: speakerObj.speaker_twitter?.url,
    github: speakerObj.speaker_github?.url,
  };

  return speaker;
}

/**
 * API helper used to create a base Company object.
 *
 * @param companyObj Prismic's Company Item
 */
// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
function mapPrismicCompanyItem(companyObj: PrismicResponseObject): Company {
  if (!companyObj) {
    throw new Error('No project data. Cannot proceed.');
  }

  const company: Company = {
    id: companyObj.company_id,
    name: companyObj.company_name,
    logoUrl: companyObj.company_logo?.url || 'assets/ionic-blue-bkg-logo.jpeg',
  };

  return company;
}

/**
 * API helper used to create a base Sponsor object.
 *
 * @param sponsorObj Prismic's Sponsor Item
 */
// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
function mapPrismicSponsorItem(sponsorObj: PrismicResponseObject): Sponsor {
  if (!sponsorObj) {
    throw new Error('No project data. Cannot proceed.');
  }

  const sponsor: Sponsor = {
    id: sponsorObj.sponsor_id,
    name: sponsorObj.sponsor_name,
    logoUrl: sponsorObj.sponsor_logo?.url,
    accentColor: sponsorObj.sponsor_accent_color || '#ffffff',
    tier: sponsorObj.sponsorship_tier,
    biography: sponsorObj.sponsor_bio.length
      ? sponsorObj.sponsor_bio[0].text
      : '',
    homepage: sponsorObj.sponsor_website?.url,
  };

  return sponsor;
}
