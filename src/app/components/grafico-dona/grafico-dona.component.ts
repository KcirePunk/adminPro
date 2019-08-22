import { Component, OnInit, Input } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input('chartLabels') public pieChartLabels: Label[] = [];
  @Input('chartData') public pieChartData: number[] = [];
  @Input('chartType') public pieChartType: ChartType;

}
