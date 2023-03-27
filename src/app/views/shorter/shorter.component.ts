import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, map, takeUntil } from 'rxjs';
import { IShorter } from 'src/app/interfaces/shorter.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-shorter',
  templateUrl: './shorter.component.html',
  styleUrls: ['./shorter.component.scss'],
})
export class ShorterComponent implements OnInit, OnDestroy {
  private readonly unsubscribe: Subject<void> = new Subject();
  private readonly baseUrl = 'https://api.shrtco.de/v2';

  link: any;
  dataSource: IShorter[] = [];
  displayedColumns: string[] = [
    'original_link',
    'code',
    'short_link',
    'short_link2',
    'short_link3',
  ];

  constructor(private readonly api: ApiService) {}

  ngOnInit(): void {
    const savedData = localStorage.getItem('shortedData');
    this.dataSource = JSON.parse(savedData || '[]');
  }

  shortLink(link: string) {
    this.api
      .get(`${this.baseUrl}/shorten`, {
        params: { url: link },
      })
      .pipe(
        map((res: any) => res?.result),
        takeUntil(this.unsubscribe),
      )
      .subscribe((data: IShorter) => {
        this.dataSource = [data, ...this.dataSource];

        localStorage.setItem('shortedData', JSON.stringify(this.dataSource));
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
