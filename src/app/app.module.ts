import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { MaterialModule } from './material.module';
import { ForceDetailsComponent } from './components/force-details/force-details.component';
import { SeniorOfficerListComponent } from './components/senior-officer-list/senior-officer-list.component';
import { OfficerDetailsDialogComponent } from './components/officer-details-dialog/officer-details-dialog.component';
import { NeighbourhoodsByForceComponent } from './components/neighbourhoods-by-force/neighbourhoods-by-force.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LayoutComponent,
    HomeComponent,
    ForceDetailsComponent,
    SeniorOfficerListComponent,
    OfficerDetailsDialogComponent,
    NeighbourhoodsByForceComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
