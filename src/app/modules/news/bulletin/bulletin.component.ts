import { Component, OnInit } from '@angular/core'
import { BulletinHttpService } from 'src/app/services/bulletin/bulletin.http.service'

@Component({
  selector: 'app-bulletin',
  templateUrl: './bulletin.component.html',
  styleUrls: ['./bulletin.component.scss'],
})
export class BulletinComponent implements OnInit {
  public bodyContentBulletin: string
  public dataBulletin: any = []
  public listNotice: any
  constructor(public serviceBulletin: BulletinHttpService) {
    this.bodyContentBulletin = ''
    this.dataBulletin = {
      accountId: '',
      senderUserId: '',
      body: '',
      commentsCounter: '',
    }
  }

  ngOnInit(): void {
    // this.getBulletin()
    this.dataBulletin = []
  }
  addNewNotice() {
    this.dataBulletin.push({
      accountId: '',
      body: this.bodyContentBulletin,
      date: Math.floor(Math.random() * 10),
      commentsCounter: '',
    })
    this.bodyContentBulletin = ''
  }
  getBulletin() {
    this.serviceBulletin.getBulletin().subscribe(
      (data) => {
        console.log('DATA', data)
      },
      (err) => {
        console.log('Error', err)
      },
    )
  }

  saveBulletin() {
    this.serviceBulletin.saveBulletin('datos').subscribe(
      (data) => {
        console.log('DATA', data)
      },
      (err) => {
        console.log('Error', err)
      },
    )
  }
}
