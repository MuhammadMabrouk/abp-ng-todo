import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'todo',
    loadChildren: () => import('./modules/todo/todo.module').then(m => m.TodoModule)
  },
  {
    path: 'account',
    loadChildren: () => import('@abp/ng.account').then(m => m.AccountModule.forLazy()),
  },
  {
    path: 'identity',
    loadChildren: () =>
      import('./modules/identity-extended/identity-extended.module').then(m => m.IdentityExtendedModule),
  },
  {
    path: 'tenant-management',
    loadChildren: () =>
      import('./modules/tenant-extended/tenant-extended.module').then(m => m.TenantExtendedModule),
  },
  {
    path: 'setting-management',
    loadChildren: () =>
      import('@abp/ng.setting-management').then(m => m.SettingManagementModule.forLazy()),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
