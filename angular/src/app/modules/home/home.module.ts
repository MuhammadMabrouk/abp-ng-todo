import * as en from './localization/en.json';
import * as ar from './localization/ar.json';

import { NgModule } from '@angular/core';
import { CoreModule } from '@abp/ng.core';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedModule,
    HomeRoutingModule,
    CoreModule.forChild({
      localizations: [
        { culture: 'en', resources: [{ resourceName: 'Home', texts: en }] },
        { culture: 'ar', resources: [{ resourceName: 'Home', texts: ar }] },
      ],
    }),
  ],
})
export class HomeModule {}
