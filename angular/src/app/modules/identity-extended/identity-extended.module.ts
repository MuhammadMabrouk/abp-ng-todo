import * as en from './localization/en.json';
import * as ar from './localization/ar.json';

import { NgModule } from '@angular/core';
import { CoreModule } from '@abp/ng.core';
import { SharedModule } from '../shared/shared.module';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { IdentityExtendedRoutingModule } from './identity-extended-routing.module';

// components
import { IdentityExtendedComponent } from './identity-extended.component';

const components = [
  IdentityExtendedComponent,
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    SharedModule,
    ThemeSharedModule,
    IdentityExtendedRoutingModule,
    CoreModule.forChild({
      localizations: [
        { culture: 'en', resources: [{ resourceName: 'Identity', texts: en }] },
        { culture: 'ar', resources: [{ resourceName: 'Identity', texts: ar }] },
      ],
    }),
  ]
})
export class IdentityExtendedModule { }
