# AcshbAngularCommon

TBu önyüz projesi T.C Aile, Çalışma ve Sosyal Hizmetler Bakanlığı' na ait olan yazılım önyüz projesidir.

## Uyumluluk

Bu proje Angular JS **"8.2.13"** paketi versiyonu ile uyumlu bir yazılımdır!

## Projede Kullanılan Paketler
```
  "dependencies": {
    "@angular/animations": "~8.2.13",
    "@angular/common": "~8.2.13",
    "@angular/compiler": "~8.2.13",
    "@angular/core": "~8.2.13",
    "@angular/forms": "~8.2.13",
    "@angular/platform-browser": "~8.2.13",
    "@angular/platform-browser-dynamic": "~8.2.13",
    "@angular/router": "~8.2.13",
    "@fortawesome/angular-fontawesome": "^0.5.0",
    "@fortawesome/fontawesome-svg-core": "^1.2.28",
    "@fortawesome/free-solid-svg-icons": "^5.13.0",
    "@fullcalendar/angular": "^4.4.1",
    "@fullcalendar/bootstrap": "^4.4.0",
    "@fullcalendar/core": "^4.4.0",
    "@fullcalendar/daygrid": "^4.4.0",
    "@ng-select/ng-select": "^3.7.3",
    "bootstrap": "^4.4.1",
    "echarts": "^4.7.0",
    "ng2-table": "^1.3.2",
    "ngx-bootstrap": "^5.6.1",
    "ngx-echarts": "^4.2.2",
    "rxjs": "~6.4.0",
    "tslib": "^1.11.1",
    "zone.js": "~0.9.1"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "^0.803.26",
    "@angular-devkit/build-ng-packagr": "^0.803.26",
    "@angular/cli": "^8.3.26",
    "@angular/compiler-cli": "~8.2.13",
    "@angular/language-service": "~8.2.13",
    "@types/echarts": "^4.4.5",
    "@types/jasmine": "~3.3.8",
    "@types/jasminewd2": "~2.0.3",
    "@types/node": "~8.9.4",
    "codelyzer": "^5.2.2",
    "jasmine-core": "~3.4.0",
    "jasmine-spec-reporter": "~4.2.1",
    "karma": "~4.1.0",
    "karma-chrome-launcher": "~2.2.0",
    "karma-coverage-istanbul-reporter": "~2.0.1",
    "karma-jasmine": "~2.0.1",
    "karma-jasmine-html-reporter": "^1.5.3",
    "ng-packagr": "^5.4.0",
    "protractor": "^5.4.3",
    "ts-node": "~7.0.0",
    "tsickle": "^0.37.0",
    "tslint": "~5.15.0",
    "typescript": "~3.5.3"
  }
```

## Proje Dosya Yapısı

```
docs/

projects/
    acshb-common/
        src/
        .gitignore
        ng-package.json
        package.json
        package-lock.json
        README.md
        tsconfig.lib.json
        tsconfig.spec.json
        tslint.json
    app/
        e2e/
        src/
        .gitignore
        browserlist
        karma.conf.js
        tsconfig.app.json
        tsconfig.spec.js
        tslint.json
.editorconfig
.gitignore
angular.json
package.json
package.lock.json
README.md
tsconfig.json
tslint.json
    
```

## Projects - acshb-common

Bu proje 'library' projesidir. 
Kullancılacak tüm Component' ler bu proje içerisinde yer alır.

## Projects - app

Bu proje acshb-common ui framework kullanılarak örnek olarak inşa edilmiş bir önyüz projesidir.

## Start Komutu
Bu komut `ng serve` komutunu çalıştırarak development ortamı içerisinde server üzerinden uygulamayı başlatır.

## Build Komutu

Derlemek için `ng build` komutu kullanılır ve dosyalar `dist/` klasörüne çıkartılırlar. Production derleme işlemi için `--prod` flag kullanılabilir.

## Unit tests Komutu

Test işlemleri için `ng test` kullanılmalıdır. [Karma](https://karma-runner.github.io).

## end-to-end tests Komutu

Uçtan uca testler için `ng e2e` komutu çalıştırılmalıdır. [Protractor](http://www.protractortest.org/).

# Kullanım İçin (Önemli!)

acshb-common ui kütüphanesini kullanmak için aşşağıdaki adımlar izlenmelidir;

1 - Öncelikle `ng build acshb-common` komutu çalıştırılarak library projesi olan 'acshb-common' projesi derlenir.

2 - Ardından `dist/` klasörü içerisinde bulunan bundle dosyaları içerisindeki `package.json` dosyası düzenlenir.

3 - `dist/` klasörüne gidilerek `npm pack` komutu çalıştırılır.
Bu komut ortaya acshb-common-{version}.tgz isimli bir npm paketi çıkartır.
Bu paket istenilen projeye `npm i ./acshb.common-{version}.tgz` komutu çalıştırılarak eklenebilir.
