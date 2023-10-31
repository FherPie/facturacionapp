import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataService } from './DataService';
import { HttpClientModule } from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogBuscarFactura, DialogNuevaFactura, VistaFacturaComponent } from './vista-factura/vista-factura.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AppRoutingModule } from './app-routing.module';
import { CreacionFacturaComponent } from './creacion-factura/creacion-factura.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { AppNavComponent } from './app-nav/app-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MY_FORMATS as MY_FORMAT_DATE } from './myDateFormats';
import { MatNativeDateModule } from '@angular/material/core';
import { DialogAnimationsExampleDialog, LoginComponent } from './login/login.component';

import {MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { ClientListComponent } from './client/client-list/client-list.component';
import { AddClientComponent } from './client/add-client/add-client.component';
import { AddProductoComponent } from './producto/add-producto/add-producto.component';
import { ProductoListComponent } from './producto/producto-list/producto-list.component';
import { CommonModule } from '@angular/common';
import { MaestroListComponent } from './maestro/maestro-list/maestro-list.component';
import { MaestroAddComponent } from './maestro/maestro-add/maestro-add.component';
import { DetalleAddComponent } from './detalle/detalle-add/detalle-add.component';
import { DetalleListComponent } from './detalle/detalle-list/detalle-list.component';
import { ComprasListComponent } from './compras/compras-list/compras-list.component';
import { TablePaginationBuilderComponent } from './dynamic-table-builder/table-pagination-builder';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AppTableModule } from './app-table/app-table.module';
import { TableComponent } from './app-table/table/table.component';
import { InputComponent } from './app-table/input/input.component';
import { ProductsComponent } from './app-table/products/products.component';
import { CardModule } from 'primeng/card';






@NgModule({
  declarations: [
    AppComponent,
    VistaFacturaComponent,
    CreacionFacturaComponent,
    AppNavComponent,
    ClientListComponent,
    AddClientComponent,
    AddProductoComponent,
    ProductoListComponent,
    LoginComponent,DialogBuscarFactura, DialogAnimationsExampleDialog,
     MaestroListComponent, MaestroAddComponent, DetalleAddComponent, DetalleListComponent,
     ComprasListComponent, TablePaginationBuilderComponent, DialogNuevaFactura
    ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDatepickerModule,
    MatButtonModule,
    MatNativeDateModule,
    MatDialogModule,
    MatMenuModule,
    MatTooltipModule,
    AppTableModule,
    CardModule
  ],
providers: [DataService,  { provide: DateAdapter, useClass:  MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
 { provide: MAT_DATE_FORMATS, useValue: MY_FORMAT_DATE }, {provide: MatDialogRef, useValue:{}}
 ], 
  // providers: [DataService
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
