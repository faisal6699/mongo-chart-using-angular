import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mongo-chart-using-angular';

  showChartType: string | undefined = 'none';

  changeType($event: any) {
    this.showChartType = $event.target.value
  }
}
