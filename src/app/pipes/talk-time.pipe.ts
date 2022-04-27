import { NgModule, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'talkTime',
})
export class TalkTimePipe implements PipeTransform {
  transform(start: Date, end: Date): unknown {
    return `${this.format(start)} - ${this.format(end, true)}`;
  }

  private format(dt: Date, tz?: boolean) {
    const options: Intl.DateTimeFormatOptions = {
      hour: 'numeric',
      minute: 'numeric',
      ...(tz && { timeZoneName: 'short' }),
    };
    return new Intl.DateTimeFormat('en-US', options).format(dt);
  }
}

@NgModule({
  declarations: [TalkTimePipe],
  exports: [TalkTimePipe],
})
export class TalkTimePipeModule {}
