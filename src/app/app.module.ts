import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddSensorsDataComponent } from './dashboard/add-sensors-data/add-sensors-data.component';
import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';
import { SensorsDataComponent } from './dashboard/sensors-data/sensors-data.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorStateMatcher, MatNativeDateModule, MatRippleModule, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { DeleteDialogComponent } from './dashboard/delete-dialog/delete-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddSensorsDataComponent,
    ButtonComponent,
    HeaderComponent,
    SensorsDataComponent,
    AboutPageComponent,
    LoadingSpinnerComponent,
    DeleteDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    FlexLayoutModule,
    MatSortModule,
    MatRippleModule,
    MatNativeDateModule,
    MatDialogModule
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
