# ioniconf
Conference app for the 2022 [ioniconf](https://ionic.io/events/enterprise-app-summit-21), hosted by Ionic, that runs on iOS and Android. This free, one day virtual event brings together tech leaders from around the world. Learn, engage, and connect with the experts using Ionic products and services to drive innovation within their companies.

Use this app to view the agenda, speaker info, and enter to win free Ionic and ioniconf swag.

## Try the App

ioniconf runs on iOS and Android all from a single codebase. Try it on your device:

- iOS: [Download on the App Store](https://apps.apple.com/app/id1622127552)
- Android: [Download on Google Play](https://play.google.com/store/apps/details?id=io.ionic.ioniconf)

## Features

**Agenda**: Display the conference's agenda including speakers, times, and talk titles. The first time the app is loaded, display a sheet modal asking the user if they'd like to get push notifications, such as a reminder when the event is about to start.

**Session Detail**: Tap on an session item to view details about the talk. "Remind Me" feature registers a local notification that triggers 5 minutes before the selected talk begins. 

**Speakers**: Scrollable list of speakers with bio and social media links.

**Swag**: Enter to win free Ionic and ioniconf 2022 swag. Custom form built to collect attendee info for the giveaway. Powered by the Hubspot API.

## Tech Details

* UI: [Ionic 6](https://ionicframework.com) and [Angular 13](https://angular.io)
* Native runtime: [Capacitor 3](https://capacitorjs.com)
* Native features powered by Capacitor:
  * [Push Notifications](https://capacitorjs.com/docs/apis/push-notifications) powered by Firebase
  * [Local Notifications](https://capacitorjs.com/docs/apis/local-notifications) - Get reminders 5 minutes before talks start
  * [Storage](https://capacitorjs.com/docs/apis/storage) - remember user's response to push notifications prompt
* [Dark mode](https://ionicframework.com/docs/theming/dark-mode), powered by Ionic 6
* [Live Updates](https://ionic.io/appflow/live-updates), powered by Appflow: Deploy instant updates directly to your users. Used to immediately ship updates to the agenda/speaker schedule on the day of the event, without needing to go through the app store review process.

## How to Run

- Install the Ionic CLI: `npm install -g @ionic/cli`
- Clone this repository
- Run `npm install`
- Build the app: `ionic build` then `npx cap sync`
- To try the app locally on the web, run `ionic serve`
- Run the app on your device, using either `npx cap open android` or `npx cap open ios`
