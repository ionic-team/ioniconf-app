import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Browser } from '@capacitor/browser';
import { ModalController } from '@ionic/angular';
import { HubspotService } from 'src/app/services/hubspot.service';
import { HubspotFormData } from 'src/app/store/store.interfaces';
import { CoreConstants } from 'src/app/util/core.constants';
import { RulesComponent } from '../rules/rules.component';

import { Country, State, City } from 'country-state-city';
// import { ICountry, IState, ICity } from 'country-state-city';

@Component({
  selector: 'app-swag-form',
  templateUrl: './swag-form.component.html',
  styleUrls: ['./swag-form.component.scss'],
})
export class SwagFormComponent implements OnInit {
  public form: FormGroup;
  public submitted = false;
  public processing = false;

  // eslint-disable-next-line max-len
  public privacyPolicyHtml = `I understand that by submitting this form, I agree to Ionic's <a href="" onclick="openPrivacyPolicy(); event.stopPropagation();">privacy policy</a>. This includes receiving marketing communications from Ionic and the event sponsors. I understand that I can unsubscribe from receiving these marketing communications at any time.`;

  constructor(
    public hubspotService: HubspotService,
    private formBuilder: FormBuilder,
    private modalController: ModalController
  ) {
    // Latest version - v3.0.0 with Tree Shaking to reduce bundle size

    console.log(Country.getAllCountries());
    console.log(State.getAllStates());

    // Import Interfaces`

    this.form = this.formBuilder.group({
      firstname: new FormControl('', Validators.compose([Validators.required])),
      lastname: new FormControl('', Validators.compose([Validators.required])),
      email: new FormControl('', Validators.compose([Validators.required])),
      job: new FormControl('', Validators.compose([Validators.required])),
      topics: new FormControl([], Validators.compose([Validators.required])),
      address: new FormControl('', Validators.compose([Validators.required])),
      city: new FormControl('', Validators.compose([Validators.required])),
      state: new FormControl('', Validators.compose([Validators.required])),
      zip: new FormControl('', Validators.compose([Validators.required])),
      country: new FormControl(
        'United States',
        Validators.compose([Validators.required])
      ),
      tshirt: new FormControl(
        'Small',
        Validators.compose([Validators.required])
      ),
    });
  }

  public get f() {
    return this.form.controls;
  }

  ngOnInit(): void {
    this.setupForm();
  }

  public async submit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    this.processing = true;
    /* eslint-disable */
    const hsdata: HubspotFormData = {
      firstname: this.f.firstname.value,
      lastname: this.f.lastname.value,
      email: this.f.email.value,
      job_function: this.f.job.value,
      topic_of_interest: this.f.topics.value.join(';'),
      enter_to_win: 'Yes',
      address: this.f.address.value,
      city: this.f.city.value,
      state: this.f.state.value,
      zip: this.f.zip.value,
      country_pl_: this.f.country.value,
      t_shirt_size: this.f.tshirt.value,
    };
    /* eslint-enable */
    this.hubspotService.submitToHubspot(hsdata).subscribe((res: any) => {
      if (res) {
        this.modalController.dismiss(res);
      }
    });
  }

  async dismiss() {
    await this.modalController.dismiss();
  }

  public async openPrivacyPolicy(evt: any) {
    evt.stopPropagation();
    await Browser.open({ url: CoreConstants.privacyPolicyUrl });
  }

  public async openRulesModal() {
    const modal: HTMLIonModalElement = await this.modalController.create({
      component: RulesComponent,
      swipeToClose: true,
      presentingElement: await this.modalController.getTop(),
    });
    return await modal.present();
  }

  private setupForm() {
    this.f.country.valueChanges.subscribe((val) => {
      if (val === 'United States') {
        this.f.state.setValidators([Validators.required]);
      } else {
        this.f.state.clearValidators();
      }
      this.f.state.updateValueAndValidity();
    });
  }
}
