import { Injectable } from '@angular/core';
import * as prismic from '@prismicio/client';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IonicEvent } from '../store/store.interfaces';
import { CoreConstants } from '../util/core.constants';
import { mapPrismicIonicEventItem } from './helpers/store-mappers';

export type PrismicResponseObject = Record<string, any>;

const baseUrl = `https://${environment.prismic.domain}.cdn.prismic.io/api/v2`;
const ref = `${environment.prismic.ref}`;
export const PRISMIC_API = {
  getDocument: `${baseUrl}/documents/search?ref=${ref}&q=[[at(document.id,"%ID%")]]`,
};

@Injectable({
  providedIn: 'root',
})
export class PrismicService {
  private client: prismic.Client;

  constructor() {
    this.client = prismic.createClient(environment.prismic.domain);
  }

  public loadData(): Observable<IonicEvent> {
    return from(this.client.getAllByIDs([CoreConstants.prismicID])).pipe(
      map((res) => mapPrismicIonicEventItem(res[0]))
    );
  }
}
