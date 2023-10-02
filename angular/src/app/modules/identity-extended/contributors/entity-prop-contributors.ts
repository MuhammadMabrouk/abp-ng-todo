import { IdentityEntityPropContributors, eIdentityComponents } from '@abp/ng.identity';
import { IdentityUserDto } from '@abp/ng.identity/proxy';
import { EntityProp, EntityPropList, ePropType } from '@abp/ng.theme.shared/extensions';
import { LocalizationService } from '@abp/ng.core';
import { of } from 'rxjs';

const nameProp = new EntityProp<IdentityUserDto>({
  type: ePropType.String,
  name: 'name',
  displayName: 'Identity::Name',
  sortable: true,
  columnWidth: 250,
});

export function namePropContributor(propList: EntityPropList<IdentityUserDto>) {
  propList.addAfter(nameProp, 'userName', (value, name) => value.name === name);
}

export function emailPropContributor(propList: EntityPropList<IdentityUserDto>) {
  const index = propList.indexOf('email', (value, name) => value.name === name);
  const droppedNode = propList.dropByIndex(index);
  const emailProp = new EntityProp<IdentityUserDto>({
    ...droppedNode.value,
    valueResolver: (data) => {
      const { email, emailConfirmed } = data.record;
      const localizationSer = data.getInjected(LocalizationService);
      const confirmedTxt = localizationSer.instant('Identity::Confirmed');
      const unconfirmedTxt = localizationSer.instant('Identity::Unconfirmed');
      let icon = '';

      if (email) {
        if (emailConfirmed) {
          icon = `<i class="fa fa-check text-success ms-1" title="${confirmedTxt}"></i>`;
        } else {
          icon = `<i class="fa fa-times text-danger ms-1" title="${unconfirmedTxt}"></i>`;
        }
      }

      return of((email || '') + icon);
    },
  });

  propList.addByIndex(emailProp, index);
}

export function phonePropContributor(propList: EntityPropList<IdentityUserDto>) {
  const index = propList.indexOf('phoneNumber', (value, name) => value.name === name);
  const droppedNode = propList.dropByIndex(index);
  const phoneProp = new EntityProp<IdentityUserDto>({
    ...droppedNode.value,
    valueResolver: (data) => {
      const { phoneNumber, phoneNumberConfirmed } = data.record;
      const localizationSer = data.getInjected(LocalizationService);
      const confirmedTxt = localizationSer.instant('Identity::Confirmed');
      const unconfirmedTxt = localizationSer.instant('Identity::Unconfirmed');
      let icon = '';

      if (phoneNumber) {
        if (phoneNumberConfirmed) {
          icon = `<i class="fa fa-check text-success ms-1" title="${confirmedTxt}"></i>`;
        } else {
          icon = `<i class="fa fa-times text-danger ms-1" title="${unconfirmedTxt}"></i>`;
        }
      }

      return of((phoneNumber || '') + icon);
    },
  });

  propList.addByIndex(phoneProp, index);
}

export const identityEntityPropContributors: IdentityEntityPropContributors = {
  [eIdentityComponents.Users]: [
    namePropContributor,
    emailPropContributor,
    phonePropContributor,
  ],
};
