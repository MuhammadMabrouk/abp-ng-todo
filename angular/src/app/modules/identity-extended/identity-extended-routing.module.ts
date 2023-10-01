import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdentityModule } from '@abp/ng.identity';
import { IdentityExtendedComponent } from './identity-extended.component';
import { identityEntityActionContributors } from './contributors/entity-action-contributors';

const routes: Routes = [
  {
    path: '',
    component: IdentityExtendedComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          IdentityModule.forLazy({
            entityActionContributors: identityEntityActionContributors,
          }),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdentityExtendedRoutingModule {}
