import { Component } from '@angular/core';
import { TenantDto } from '@abp/ng.tenant-management/proxy';

@Component({
  selector: 'app-tenant-extended',
  templateUrl: './tenant-extended.component.html',
  styleUrls: ['./tenant-extended.component.scss']
})
export class TenantExtendedComponent {

  logTenantRecord(record: TenantDto) {
    console.log(record);
  }
}
