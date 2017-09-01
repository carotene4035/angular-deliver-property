import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  private deliverProperty: string = '子供に送るよ。';
  private notDeliverProperty: string = '子供に送らないよ。';
}
