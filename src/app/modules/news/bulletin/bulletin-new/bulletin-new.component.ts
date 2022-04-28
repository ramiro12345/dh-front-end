import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Input
} from '@angular/core';

@Component({
  selector: 'app-bulletin-new',
  templateUrl: './bulletin-new.component.html',
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class BulletinNewComponent implements OnInit {
  public listBulletins: any;
  @Input('dataNotice') dataBulletin: any;

  constructor() {
  }

  ngOnInit(): void {
    this.listBulletins = this.dataBulletin;
  }
}
