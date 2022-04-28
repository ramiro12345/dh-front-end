import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Input
} from '@angular/core';

@Component({
  selector: 'app-bulletin-new',
  templateUrl: './bulletin-new.component.html',
  changeDetection: ChangeDetectionStrategy.Default
})
export class BulletinNewComponent implements OnInit {
  public listNotice: any;
  @Input('dataNotice') dataBulletin: any;

  constructor() {
  }

  ngOnInit(): void {
    this.listNotice = this.dataBulletin;
  }

  public viewMore(more: string) :void {
    if (more == 'mas') {
      (<HTMLInputElement>document.getElementById('desplegar')).style.display = 'block';
      (<HTMLInputElement>document.getElementById('mas')).style.display = 'none';
    } else {
      (<HTMLInputElement>document.getElementById('desplegar')).style.display = 'none';
      (<HTMLInputElement>document.getElementById('mas')).style.display = 'inline';
    }
  }
}
