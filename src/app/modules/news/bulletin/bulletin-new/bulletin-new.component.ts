import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Input
} from '@angular/core';

@Component({
  selector: 'app-bulletin-new',
  templateUrl: './bulletin-new.component.html',
  styleUrls: ['./bulletin-new.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class BulletinNewComponent implements OnInit {
  public listNotice: any;
  @Input('dataNotice') datos!: any;

  constructor() {
  }

  ngOnInit(): void {
    this.listNotice = this.datos;
  }

  viewMore(more: string) {
    if (more == 'mas') {
      (<HTMLInputElement>document.getElementById('desplegar')).style.display = 'block';
      (<HTMLInputElement>document.getElementById('mas')).style.display = 'none';
    } else {
      (<HTMLInputElement>document.getElementById('desplegar')).style.display = 'none';
      (<HTMLInputElement>document.getElementById('mas')).style.display = 'inline';
    }
    console.log('asdsa', more);
  }
}
