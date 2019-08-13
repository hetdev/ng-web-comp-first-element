import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-web-comp-first-element';

  @Output() changeNameToEventEmit = new EventEmitter<any>();

  changeNameToHetdev() {
    const data = {
      name: 'Hetdev'
    };
    const event = new CustomEvent('changeNameToCustomEvent', { detail: data });
    window.dispatchEvent(event);
    this.changeNameToEventEmit.emit(data);

  }
}
