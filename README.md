# BS-app
Test for en liten app ved bruk av [Apache Cordova](http://cordova.apache.org/). Foreløpig kun satt opp og testet mot Android.

Appen er skrevet i [AngularJS](https://docs.angularjs.org/guide) og bruker [Ionic](http://ionicframework.com/docs/) som CSS-rammeverk.

Web-avhengigheter håndteres med [Bower](http://bower.io/) og [gulp](http://gulpjs.com/) brukes for å bearbeide js/css osv.

Data hentes fra API-et til [BS sin internside](https://github.com/blindern/intern).

## Oppsett
* TODO: Forklare oppsett av Apache Cordova
* Installer bower-pakker: `$ bower install`
* Generer js/css: `$ gulp`
* Test løsningen: `$ cordova serve` og åpne nettleseren på adressen som oppgis
* Generer APK for Android: `$ cordova build android` (se deretter `platforms/android/ant-build/CordovaApp-debug.apk`)