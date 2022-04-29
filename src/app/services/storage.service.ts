import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';

const PUSH_REQUESTED = 'push_notes_requested';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  public async setPushNotesRequested(requested: boolean) {
    await Storage.set({
      key: PUSH_REQUESTED,
      value: requested.toString(),
    });
  }

  public async getPushNotesRequested() {
    const { value } = await Storage.get({ key: PUSH_REQUESTED });
    return value;
  }
}
