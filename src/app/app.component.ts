import { Component } from '@angular/core';
import { EventService } from './event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'event-app';
  public events:any
  public searchText : string;
  constructor(
    private eventService: EventService) { }

  ngOnInit() {
    this.eventService.getEventData().subscribe((data: any) => {
      if (data) {
        console.log("event Data",data);
        this.events = data.event;
      
      }
    }, error => {
      // console.log('error in Project Service',error);
    });
  }
}
