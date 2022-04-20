import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Input,
} from '@angular/core'

@Component({
  selector: 'app-bulletin-new',
  templateUrl: './bulletin-new.component.html',
  styleUrls: ['./bulletin-new.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class BulletinNewComponent implements OnInit {
  public listNotice: any
  @Input('dataNotice') datos!: any
  constructor() {}

  ngOnInit(): void {
    this.listNotice = this.datos;
  }
}
