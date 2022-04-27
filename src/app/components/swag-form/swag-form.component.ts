import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { HubspotService } from 'src/app/services/hubspot.service';
import { HubspotFormData } from 'src/app/store/store.interfaces';

@Component({
  selector: 'app-swag-form',
  templateUrl: './swag-form.component.html',
  styleUrls: ['./swag-form.component.scss'],
})
export class SwagFormComponent implements OnInit {
  public form: FormGroup;
  public submitted = false;
  public processing = false;

  constructor(
    public hubspotService: HubspotService,
    private formBuilder: FormBuilder,
    private modalController: ModalController
  ) {
    this.form = this.formBuilder.group({
      firstname: new FormControl('', Validators.compose([Validators.required])),
      lastname: new FormControl('', Validators.compose([Validators.required])),
      email: new FormControl('', Validators.compose([Validators.required])),
      address: new FormControl('', Validators.compose([Validators.required])),
      city: new FormControl('', Validators.compose([Validators.required])),
      state: new FormControl(''),
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
      address: this.f.address.value,
      city: this.f.city.value,
      state: this.f.state.value,
      zip: this.f.zip.value,
      country_pl_: this.f.country.value,
      t_shirt_size: this.f.tshirt.value,
    };
    /* eslint-enable */
    const success = await this.hubspotService.submitToHubspot(hsdata);

    if (success) {
      await this.modalController.dismiss(success);
    }
  }

  async dismiss() {
    await this.modalController.dismiss();
  }

  private setupForm() {
    this.f.country.valueChanges.subscribe((val) => {
      console.log(val);
      if (val === 'United States') {
        this.f.state.setValidators([Validators.required]);
      } else {
        this.f.state.clearValidators();
      }
      this.f.state.updateValueAndValidity();
    });

    console.log('Form:', this.form);
    console.log('Form Value:', this.form.value);
    console.log('Form Valid:', this.form.valid);
    console.log('Form Errors:', this.form.errors);
    console.log('Processing:', this.processing);
  }
}
