import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HubspotFormData } from '../store/store.interfaces';

const hsApiKey = `${environment.hubspot.apiKey}`;
const hsPortalID = `${environment.hubspot.portalID}`;
const hsFormID = `${environment.hubspot.formID}`;
const hsSubmitUrl = `https://api.hsforms.com/submissions/v3/integration/submit/${hsPortalID}/${hsFormID}`;

const jobFunctions = [
  'IT Executive (CIO, CTO, VP Engineering, etc.)',
  'Business Executive (CEO, COO, CMO, etc.)',
  'Architect',
  'Director/ Development Manager',
  'Product/ Project Manager',
  'Software Developer/ Engineer',
  'Student',
  'Other',
];

const topicsOfInterest = [
  {
    name: 'Capacitor',
    value: 'Capacitor',
  },
  {
    name: 'Portals',
    value: 'Portals',
  },
  {
    name: 'Ionic Framework',
    value: 'Ionic Framework',
  },
  {
    name: 'Appflow',
    value: 'Appflow',
  },
  {
    name: 'Stencil',
    value: 'Stencil',
  },
  {
    name: 'Enterprise Native Solutions',
    value: 'Native Integration',
  },
  {
    name: 'Angular',
    value: 'Angular',
  },
  {
    name: 'React',
    value: 'React',
  },
  {
    name: 'Vue',
    value: 'Vue',
  },
  {
    name: 'PWAs',
    value: 'PWAs',
  },
  {
    name: 'Performance Techniques',
    value: 'Performance Techniques',
  },
  {
    name: 'Web Components',
    value: 'Web Components',
  },
  {
    name: 'New Web APIs',
    value: 'New Web APIs',
  },
];

const tshirtSizes = ['Small', 'Medium', 'Large', 'X-Large', '2X-Large'];

@Injectable({
  providedIn: 'root',
})
export class HubspotService {
  constructor(private http: HttpClient) {}

  public get jobFunctions(): string[] {
    return jobFunctions;
  }

  public get topicsOfInterest(): { name: string; value: string }[] {
    return topicsOfInterest;
  }

  public get tshirtSizes(): string[] {
    return tshirtSizes;
  }

  public submitToHubspot(data: HubspotFormData) {
    const hubspotData = this.buildHubspotRequest(data);
    const body = JSON.stringify(hubspotData);
    return this.http.post(hsSubmitUrl, body, {
      /* eslint-disable */
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      params: {
        hapikey: hsApiKey,
      },
      /* eslint-enable */
    });
  }

  // Convert form data into Hubspot data structure
  private buildHubspotRequest(data: HubspotFormData) {
    const finalData = {
      submittedAt: new Date().getTime().toString(),
      fields: [],
      legalConsentOptions: {
        consent: {
          // Include this object when GDPR options are enabled
          consentToProcess: true,
          text: 'I agree to allow Ionic to store and process my personal data.',
          communications: [
            {
              value: true,
              subscriptionTypeId: 4913981,
              text: 'I agree to receive marketing communications from Ionic.',
            },
          ],
        },
      },
    };

    for (let i = 0; i < Object.keys(data).length; i++) {
      const fieldName = Object.keys(data)[i];
      const value = Object.values(data)[i];
      finalData.fields.push({
        name: fieldName,
        value,
      });
    }

    return finalData;
  }
}
