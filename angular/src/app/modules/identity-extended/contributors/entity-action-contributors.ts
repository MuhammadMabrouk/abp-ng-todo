import { IdentityEntityActionContributors, eIdentityComponents } from '@abp/ng.identity';
import { IdentityUserDto } from '@abp/ng.identity/proxy';
import { EntityAction, EntityActionList } from '@abp/ng.theme.shared/extensions';
import { IdentityExtendedComponent } from '../identity-extended.component';

const quickViewAction = new EntityAction<IdentityUserDto>({
  text: 'Identity::QuickView',
  icon: 'fas fa-bolt',
  action: (data) => {
    const component = data.getInjected(IdentityExtendedComponent);
    component.openUserQuickView(data.record);
  },
  visible: (data) => {
    return data.record.isActive;
  },
});

export function customModalContributor(actionList: EntityActionList<IdentityUserDto>) {
  actionList.addTail(quickViewAction);
}

export const identityEntityActionContributors: IdentityEntityActionContributors = {
  [eIdentityComponents.Users]: [customModalContributor],
};
