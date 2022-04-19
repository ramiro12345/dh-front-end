import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bulletin-new',
  templateUrl: './bulletin-new.component.html',
  styleUrls: ['./bulletin-new.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BulletinNewComponent implements OnInit {
public listNotice: any;
  constructor() { }

  ngOnInit(): void {
    this.listNotice = [
      {
        title: 'Titulo 1',
        subTitle: 'Subtitulo de la noticia 1',
        body: 'Contenido de la noticia 1'
      },
      {
        title: 'Titulo 2',
        subTitle: 'Subtitulo de la noticia 2',
        body: 'Contenido de la noticia 2'
      },
      {
        title: 'Titulo 3',
        subTitle: 'Subtitulo de la noticia 3',
        body: 'Contenido de la noticia 3'
      }
    ];
  }

}
