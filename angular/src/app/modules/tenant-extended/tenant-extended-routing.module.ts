import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TenantManagementModule } from '@abp/ng.tenant-management';
import { TenantExtendedComponent } from './tenant-extended.component';
import { tenantEntityActionContributors } from './contributors/entity-action-contributors';

const routes: Routes = [
  {
    path: '',
    component: TenantExtendedComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          TenantManagementModule.forLazy({
            entityActionContributors: tenantEntityActionContributors,
          }),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TenantExtendedRoutingModule {}
