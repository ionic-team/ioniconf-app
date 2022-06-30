import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

const PUSH_REQUESTED = 'push_notes_requested';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  public async setPushNotesRequested(requested: boolean) {
    await Preferences.set({
      key: PUSH_REQUESTED,
      value: requested.toString(),
    });
  }

  public async getPushNotesRequested() {
    const { value } = await Preferences.get({ key: PUSH_REQUESTED });
    return value;
  }
}
