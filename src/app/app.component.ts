import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  view = '';
  title = 'UdemyShoppingList';

  setView(viewChoice: string) {
    this.view = viewChoice;
  }


}
