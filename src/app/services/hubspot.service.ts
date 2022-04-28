import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HubspotFormData } from '../store/store.interfaces';

const hsApiKey = `${environment.hubspot.apiKey}`;
const hsPortalID = `${environment.hubspot.portalID}`;
const hsFormID = `${environment.hubspot.formID}`;
const hsSubmitUrl = `https://api.hsforms.com/submissions/v3/integration/submit/${hsPortalID}/${hsFormID}`;

const states = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District Of Columbia',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
];

const countries = [
  'United States',
  'Aland Islands',
  'Angola',
  'Anguilla',
  'Antarctica',
  'Antigua & Barbuda',
  'Argentina',
  'Armenia',
  'Aruba',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Baden',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia & Herzegovina',
  'Botswana',
  'British Indian Ocean Territory',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cabo Verde',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Cayman Islands',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Christmas Island',
  'Cocos (Keeling) Islands',
  'Colombia',
  'Comoros',
  'Cook Islands',
  'Costa Rica',
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  // eslint-disable-next-line @typescript-eslint/quotes
  "Côte d'Ivoire",
  'Democratic Republic of the Congo',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Eswatini',
  'Ethiopia',
  'Falkland Islands (Malvinas)',
  'Faroe Islands',
  'Fiji',
  'Finland',
  'France',
  'French Guiana',
  'French Southern Territories',
  'Gabon',
  'Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Gibraltar',
  'Greece',
  'Greenland',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Holy See',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Kosovo',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macedonia, the former Yugoslav Republic of',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Morocco',
  'Mozambique',
  'Myanmar/Burma',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'North Korea',
  'Norway',
  'Oman',
  'Pacific Islands',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Puerto Rico',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent and the Grenadines',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'South Korea',
  'South Sudan',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Trinidad & Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe',
];

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
  {
    name: 'Capacitor',
    value: 'Capacitor',
  },
  {
    name: 'Capacitor',
    value: 'Capacitor',
  },
];

const tshirtSizes = ['Small', 'Medium', 'Large', 'X-Large', '2X-Large'];

@Injectable({
  providedIn: 'root',
})
export class HubspotService {
  constructor(private http: HttpClient) {}

  public get states(): string[] {
    return states;
  }

  public get countries(): string[] {
    return countries;
  }

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
    console.log(hubspotData);
    console.log(JSON.stringify(hubspotData));
    // const response = await fetch(submitUrl, {
    //   method: 'POST',
    //   /* eslint-disable */
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Accept: 'application/json',
    //   },
    //   /* eslint-enable */
    //   body: JSON.stringify(hubspotData),
    // });
    // console.log(response);
    // return response.ok;

    const body = JSON.stringify(hubspotData);
    // const params = new HttpParams().append('hapikey', hsApiKey);
    // const headers = new HttpHeaders()
    //   .set('Content-Type', 'application/json')
    //   .set('Accept', 'application/json');
    console.log(body);
    // console.log(params);
    // console.log(headers);
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
