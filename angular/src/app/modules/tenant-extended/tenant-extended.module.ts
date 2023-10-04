import * as en from './localization/en.json';
import * as ar from './localization/ar.json';

import { NgModule } from '@angular/core';
import { CoreModule } from '@abp/ng.core';
import { SharedModule } from '../shared/shared.module';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { TenantExtendedRoutingModule } from './tenant-extended-routing.module';

// components
import { TenantExtendedComponent } from './tenant-extended.component';

const components = [
  TenantExtendedComponent,
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    SharedModule,
    ThemeSharedModule,
    TenantExtendedRoutingModule,
    CoreModule.forChild({
      localizations: [
        { culture: 'en', resources: [{ resourceName: 'Tenant', texts: en }] },
        { culture: 'ar', resources: [{ resourceName: 'Tenant', texts: ar }] },
      ],
    }),
  ]
})
export class TenantExtendedModule { }
