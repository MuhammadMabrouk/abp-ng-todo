import { Component } from '@angular/core';
import { IdentityUserDto } from '@abp/ng.identity/proxy';

@Component({
  selector: 'app-identity-extended',
  templateUrl: './identity-extended.component.html',
  styleUrls: ['./identity-extended.component.scss']
})
export class IdentityExtendedComponent {

  isUserQuickViewVisible: boolean;

  user: IdentityUserDto;

  openUserQuickView(record: IdentityUserDto) {
    this.user = new Proxy(record, {
      get: (target, prop) => target[prop] || '—',
    });
    this.isUserQuickViewVisible = true;
  }

  closeUserQuickView() {
    this.isUserQuickViewVisible = false;
  }
}
