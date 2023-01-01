import { Injectable } from '@angular/core';
import { Sensor } from '../Sensor';
import { Sensorendata } from '../Sensorendata';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  public sensorenDaten: Sensorendata[] = [];
  public sensoren: Sensor[] = [];

  public page: any = 1;
  public pageSize: any = 10;
  public length: any = 50;

  public isLoading = false;

  constructor() { }
}
