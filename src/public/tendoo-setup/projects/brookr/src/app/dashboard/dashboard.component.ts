import { Component, OnInit, isDevMode } from '@angular/core';
import { TableConfig } from '@cloud-breeze/core';
import { TendooService } from '@cloud-breeze/services';
import { DashboardService } from '../services/dashboard.service';
import { forkJoin } from 'rxjs';
import { DriversService } from '../services/drivers.service';
import { LoadsService } from '../services/loads.service';

interface SingleWeekReport {
  total_loads: number;
  total_incomes: number;
  total_drivers: number;
  total_trucks: number;
  week_total_loads: number;
  week_ongoing_loads: number;
  week_pending_loads: number;
  week_total_trucks: number;
  week_total_drivers: number;
  week_total_incomes: number;
  assigned_drivers: number;
  unassigned_drivers: number;
  unavailable_drivers: number;
  available_trucks: number;
  assigned_trucks: number;
}

interface DashboardReport {
  current: SingleWeekReport,
  previous: SingleWeekReport  
}

const defaultValues:SingleWeekReport   = {
  total_loads: 0,
  total_incomes: 0,
  total_drivers: 0,
  total_trucks: 0,
  week_total_loads: 0,
  week_ongoing_loads: 0,
  week_pending_loads: 0,
  week_total_drivers: 0,
  week_total_incomes: 0,
  week_total_trucks: 0,
  assigned_drivers: 0,
  unassigned_drivers: 0,
  unavailable_drivers: 0,
  available_trucks: 0,
  assigned_trucks: 0,
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dashboardReport : DashboardReport   = {
    current: defaultValues,
    previous: defaultValues
  }
  
  tableCrud:TableConfig   = {
    columns: {
      load : {
        label: 'Load',
      },
      status: {
        label: 'Status'
      },
      driver: {
        label: 'Driver'
      }
    },
    labels: {
      list_title: 'Ongoing Loads',
      list_description: 'display all ongoing loads',
      create_title: 'Create Load',
      create_description: 'Will create new load',
      edit_title: 'Edit an existing load',
      edit_description: 'Load will be edited'
    },
    namespace: 'brookr.loads',
    fields: [],
    links: {},
  }
  urlPrefix   = ! isDevMode() ? '/modules/brookr/brookr' : '';
  driversByMedical: any[];
  driversByLicense: any[];
  unassignedLoads: any[];

  constructor(
    private tendoo: TendooService,
    private dashboard: DashboardService,
    private drivers: DriversService,
    private loads: LoadsService
  ) { }

  ngOnInit(): void {
    forkJoin([
      this.dashboard.getReport(),
      this.drivers.getByMedicalCard(),
      this.drivers.getByDriverCard(),
      this.loads.getUnassignedLoads(),
    ]).subscribe( (result: [ DashboardReport, any[], any[], any[] ]) => {
      this.parseReport( result[0] );
      this.driversByMedical   = result[1];
      this.driversByLicense   = result[2];
      this.unassignedLoads    = result[3];
    });
  }

  parseReport( report: DashboardReport ) {
    this.dashboardReport.current    = report.current || this.dashboardReport.current;
    this.dashboardReport.previous   = report.previous || this.dashboardReport.previous;
  }

  percentage( argument ) {
    if ( this.dashboardReport.current[ argument ] !== 0 && this.dashboardReport.previous[ argument ] !== 0 ) {
      return ( ( this.dashboardReport.current[ argument ] - this.dashboardReport.previous[ argument ] ) * 100 ) / this.dashboardReport.current[ argument ];
    }
    return 0;
  }

  refreshDashboardReport() {
    this.dashboard.refreshReport().subscribe( result => {
      this.ngOnInit();
    })
  }
}
