# BS-app
Test for en liten app ved bruk av [http://cordova.apache.org/](Apache Cordova). Foreløpig kun satt opp og testet mot Android.

Appen er skrevet i [https://docs.angularjs.org/guide](AngularJS) og bruker [http://ionicframework.com/docs/](Ionic) som CSS-rammeverk.

Web-avhengigheter håndteres med [http://bower.io/](Bower) og [http://gulpjs.com/](gulp) brukes for å bearbeide js/css osv.

Data hentes fra API-et til [https://github.com/blindern/intern](BS sin internside).

## Oppsett
* TODO: Forklare oppsett av Apache Cordova
* Installer bower-pakker: `$ bower install`
* Generer js/css: `$ gulp`
* Test løsningen: `$ cordova serve` og åpne nettleseren på adressen som oppgis
* Generer APK for Android: `$ cordova build android` (se deretter `platforms/android/ant-build/CordovaApp-debug.apk`)