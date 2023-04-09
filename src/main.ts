import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { enviroment } from './enviroments/enviroment'

if(enviroment.APP_ENV === 'PROD') {
  enableProdMode();
}


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err: any) => console.error(err));
