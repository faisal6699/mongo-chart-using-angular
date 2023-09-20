import {Component, OnInit} from '@angular/core';
import {ChartService} from "../../service/chart-service/chart.service";
import {CustomLoginService} from "../../service/custom-login-service/custom-login.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  constructor(private chartService: ChartService,
              private customLoginService: CustomLoginService) {
  }
  ngOnInit() {
    setTimeout(async () => {
      await this.tryLogin();
    })
  }

  async tryLogin() {
    const token = await this.customLoginService.login()

    if(token) {
      await this.renderDashboard(token)
    }
  }

  private async renderDashboard(token: string) {
      document.getElementById('dashboard')!.style.visibility = 'visible';
      const dashboard = this.chartService.
      createChartDashboard('https://charts.mongodb.com/charts-project-0-ghpqb',
        '0e6acbe1-59e1-4147-aa83-96ef8397e7a0', token);

   await dashboard
      .render(document.getElementById('dashboard')!)
      .catch(() => window.alert('Chart failed to initialise'));

  }
}
