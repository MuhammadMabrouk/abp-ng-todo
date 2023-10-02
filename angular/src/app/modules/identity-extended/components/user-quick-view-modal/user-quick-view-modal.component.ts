import { Component, Input } from '@angular/core';
import { IdentityUserDto } from '@abp/ng.identity/proxy';

@Component({
  selector: 'app-user-quick-view-modal',
  templateUrl: './user-quick-view-modal.component.html',
  styleUrls: ['./user-quick-view-modal.component.scss']
})
export class UserQuickViewModalComponent {

  @Input() isOpen: boolean;
  @Input() userData: IdentityUserDto;

}
