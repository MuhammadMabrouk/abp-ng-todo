import { IdentityToolbarActionContributors, eIdentityComponents } from '@abp/ng.identity';
import { IdentityUserDto } from '@abp/ng.identity/proxy';
import { ToolbarAction, ToolbarActionList } from '@abp/ng.theme.shared/extensions';
import { ToasterService } from '@abp/ng.theme.shared';
import { IdentityExtendedComponent } from '../identity-extended.component';

const logUserNames = new ToolbarAction<IdentityUserDto[]>({
  text: 'Identity::DoNotClickMe',
  icon: 'fas fa-flushed',
  action: (data) => {
    const toasterSer = data.getInjected(ToasterService);

    data.record.forEach(user => {
      toasterSer.info(user.userName, 'Identity::Name');
    });
  },
});

export function toastUserNamesContributor(actionList: ToolbarActionList<IdentityUserDto[]>) {
  actionList.addHead(logUserNames);
}

const quickViewAction = new ToolbarAction<IdentityUserDto[]>({
  text: 'Identity::FirstUserQuickView',
  icon: 'fas fa-bolt',
  action: (data) => {
    const component = data.getInjected(IdentityExtendedComponent);
    component.openUserQuickView(data.record[0]);
  },
});

export function customModalContributor(actionList: ToolbarActionList<IdentityUserDto[]>) {
  actionList.addHead(quickViewAction);
}

export const identityToolbarActionContributors: IdentityToolbarActionContributors = {
  [eIdentityComponents.Users]: [
    toastUserNamesContributor,
    customModalContributor,
  ],
};
