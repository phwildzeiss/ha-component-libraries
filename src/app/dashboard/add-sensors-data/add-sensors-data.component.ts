import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroupDirective, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { BackendService } from 'src/app/shared/backend.service';
import { StoreService } from 'src/app/shared/store.service';
import {FloatLabelType} from '@angular/material/form-field';


@Component({
  selector: 'app-add-sensors-data',
  templateUrl: './add-sensors-data.component.html',
  styleUrls: ['./add-sensors-data.component.scss']
})
export class AddSensorsDataComponent implements OnInit {

  @ViewChild(FormGroupDirective) formGroupDirective!: FormGroupDirective;

  constructor(public storeService: StoreService, private formBuilder: UntypedFormBuilder, public backendService: BackendService) { }
  
  public sensorenDataForm: any;
  public showAddTask: boolean = false;
  public expandAddMeasurement: string = "chevron_right";
  floatLabelControl = new FormControl('auto' as FloatLabelType);
  close = "expand_more";
  add = 'chevron_right';
  isDisabled = false;
  isReadOnly = false;

  sensorFormControl = new FormControl('', Validators.required);
  dateFormControl = new FormControl('', [Validators.required]);
  temperatureFormControl = new FormControl('', [Validators.pattern('^$|^-?[0-9]+'), Validators.required]);
  humidityFormControl = new FormControl('', [Validators.pattern('^$|^[0-9]+'), Validators.required]);
  ngOnInit(): void {
    this.sensorenDataForm = this.formBuilder.group({
      sensorId: this.sensorFormControl,
      date: this.dateFormControl,
      temperature: this.temperatureFormControl,
      humidity: this.humidityFormControl,
    });
  }

  async onSubmit() {
    if(this.sensorenDataForm?.valid) {
      this.isDisabled = true;
      this.isReadOnly = true;
      await this.backendService.addSensorsData(this.sensorenDataForm.value);
      this.sensorenDataForm.reset();
      this.formGroupDirective.resetForm();
      this.isDisabled = false;
      this.isReadOnly = false;
    }
  }

  toggleAddTask() {
    this.showAddTask = !this.showAddTask;
    this.expandAddMeasurement = this.showAddTask ? 'expand_more' : 'chevron_right'
  }

  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }

}
