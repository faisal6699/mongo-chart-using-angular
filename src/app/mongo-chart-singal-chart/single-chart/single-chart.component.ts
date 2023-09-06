import {Component, OnInit} from '@angular/core';
import {ChartService} from "../../service/chart-service/chart.service";

@Component({
  selector: 'app-single-chart',
  templateUrl: './single-chart.component.html',
  styleUrls: ['./single-chart.component.css']
})
export class SingleChartComponent implements OnInit {

  constructor(private chartService: ChartService) {
  }
  ngOnInit() {
    setTimeout(async () => {
      await this.renderSingleChart()
    })
  }

  private async renderSingleChart() {
    document.getElementById('chart')!.style.visibility = 'visible';
    const chart = this.chartService.
    createSingleChart('https://charts.mongodb.com/charts-project-0-ghpqb',
      '64dcf3a9-29c2-4e2f-85d0-a39ebf6d8503');

    await chart
      .render(document.getElementById('chart')!)
      .catch(() => window.alert('Chart failed to initialise'));

  }

}
