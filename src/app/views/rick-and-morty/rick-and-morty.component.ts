import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, concatMap, takeUntil } from 'rxjs';
import { ICharacter } from 'src/app/interfaces/rick.interface';
import { NavbarService } from 'src/app/services/navbar.service';
import { RickApiService } from 'src/app/services/rick-api.service';

@Component({
  selector: 'app-rick-and-morty',
  templateUrl: './rick-and-morty.component.html',
  styleUrls: ['./rick-and-morty.component.scss'],
})
export class RickAndMortyComponent implements OnInit, OnDestroy {
  private unsubscribe: Subject<void> = new Subject();
  loading: boolean = true;
  countTotal: number = 1;
  prevCharacter: number | undefined;
  character: ICharacter | undefined;

  constructor(
    private readonly navbarService: NavbarService,
    private readonly rickApi: RickApiService,
  ) {
    this.navbarService.setTitle('Rick & Morty');
  }

  ngOnInit(): void {
    this.rickApi
      .getCharacters()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(({ info }) => {
        this.countTotal = info?.count;

        this.getNewCharacter();
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  getNewCharacter(prev?: number) {
    this.loading = true;
    const current = Math.ceil(Math.random() * this.countTotal);
    this.prevCharacter = this.character?.id;

    this.rickApi
      .getCharacter(prev || current)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((char) => {
        this.character = char;

        this.loading = false;
      });
  }
}
