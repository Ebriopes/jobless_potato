import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { ICharacter, ICharacters } from '../interfaces/rick.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RickApiService {
  baseUrl = 'https://rickandmortyapi.com/api';

  constructor(private readonly api: ApiService) {}

  getCharacters(): Observable<ICharacters> {
    return this.api.get(`${this.baseUrl}/character`) as Observable<ICharacters>;
  }

  getCharacter(id: number): Observable<ICharacter> {
    return this.api.get(
      `${this.baseUrl}/character/${id}`,
    ) as Observable<ICharacter>;
  }
}
