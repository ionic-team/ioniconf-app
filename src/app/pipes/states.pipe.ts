import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { Country, State } from 'country-state-city';
import { ICountry, IState } from 'country-state-city/dist/lib/interface';

@Pipe({
  name: 'states',
})
export class StatesPipe implements PipeTransform {
  private countries: ICountry[];

  constructor() {
    this.countries = Country.getAllCountries();
  }

  transform(country: string): IState[] {
    const selectedCountry = this.countries.find((c) => c.name === country);
    const states: IState[] = State.getStatesOfCountry(selectedCountry.isoCode);
    console.log(states);
    return states;
  }
}

@NgModule({
  declarations: [StatesPipe],
  exports: [StatesPipe],
})
export class StatesPipeModule {}
