import { Component, OnInit } from '@angular/core';
import { DatatablesViewService } from './datatables-view.service';

@Component({
  selector: 'app-datatables-view',
  templateUrl: './datatables-view.component.html',
  styleUrls: ['./datatables-view.component.scss']
})
export class DatatablesViewComponent implements OnInit {
  columns;
  data;
  config;

  constructor(private service: DatatablesViewService) {
    this.initialize();
  }

  initialize() {
    this.columns = [
      {
        name: 'postId',
        title: 'Post Numarası',
        sort: false
      },
      {
        name: 'id',
        title: 'Id',
        sort: false
      },
      {
        name: 'name',
        title: 'İsim',
        filtering: { placeholder: 'İsme göre ara' },
        sort: false
      },
      {
        name: 'body',
        title: 'İçerik',
        filtering: { placeholder: 'İçeriğe göre ara' },
        sort: 'asc'
      },
      {
        name: 'email',
        title: 'E-Posta',
        filtering: { placeholder: 'E-Posta ya göre ara' },
        sort: 'asc'
      }
    ];
    this.data = [];
  }

  ngOnInit(): void {
    this.service.fetch().subscribe((data: any) => {
      this.data = data;
    });
  }
}
