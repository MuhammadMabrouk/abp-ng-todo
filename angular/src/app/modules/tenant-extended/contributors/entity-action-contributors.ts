import { TenantManagementEntityActionContributors, eTenantManagementComponents } from '@abp/ng.tenant-management';
import { TenantDto } from '@abp/ng.tenant-management/proxy';
import { EntityAction, EntityActionList } from '@abp/ng.theme.shared/extensions';
import { TenantExtendedComponent } from '../tenant-extended.component';

const quickViewAction = new EntityAction<TenantDto>({
  text: 'Tenant::LogToConsole',
  icon: 'fas fa-paste',
  action: (data) => {
    const component = data.getInjected(TenantExtendedComponent);
    component.logTenantRecord(data.record);
  },
});

export function customModalContributor(actionList: EntityActionList<TenantDto>) {
  actionList.addTail(quickViewAction);
}

export const tenantEntityActionContributors: TenantManagementEntityActionContributors = {
  [eTenantManagementComponents.Tenants]: [customModalContributor],
};
