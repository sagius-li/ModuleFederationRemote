import { Component, OnInit } from '@angular/core';

import { RemoteUtilsService } from '../../services/remote-utils.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  standalone: true,
  styleUrl: './page.component.css'
})
export class PageComponent implements OnInit {
  constructor(private remoteUtilsService: RemoteUtilsService) { }

  ngOnInit(): void {
    this.remoteUtilsService.log('PageComponent initialized');
  }
}
