import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { SensorPosition } from 'src/app/Sensor';
import { BackendService } from 'src/app/shared/backend.service';
import { StoreService } from 'src/app/shared/store.service';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-sensors-data',
  templateUrl: './sensors-data.component.html',
  styleUrls: ['./sensors-data.component.scss']
})
export class SensorsDataComponent implements OnInit {

  @ViewChild('paginator') paginator: any;

  public get SensorPosition() {return SensorPosition; }
  public page = this.storeService.page - 1;
  isDeleting = false;
  toDeleteItemId: number = 0;
  mapDeleteItems = new Map();

  constructor(private backendService: BackendService, public storeService: StoreService, private cd: ChangeDetectorRef) { }

  displayedColumns: string[] = ['sensorName', 'date', 'temperature', 'humidity', 'location', 'position', 'delete'];

  async ngOnInit() {
    Promise.resolve().then(() => this.storeService.isLoading = true);
    await this.backendService.getSensoren();
    await this.backendService.getSensorenDaten();
    Promise.resolve().then(() => this.storeService.isLoading = false);
  }

  async deleteSensordata(id: number) {
    console.log('DELETE SENSOR DATA');
    console.log(id);
    this.mapDeleteItems.set(id, true);
    console.log(this.storeService.length);
    if(this.storeService.sensorenDaten.length == 1) {
      console.log(this.storeService.length);
      this.paginator.previousPage();
    }
    await this.backendService.deleteSensorsDaten(id);

    this.mapDeleteItems.delete(id);
  }

  async handlePageEvent(event: PageEvent) {
    this.storeService.isLoading = true;
    this.storeService.length = event.length;
    this.storeService.pageSize = event.pageSize;
    this.storeService.page = event.pageIndex + 1;
    await this.backendService.getSensorenDaten();
    this.storeService.isLoading = false;
  }

}
