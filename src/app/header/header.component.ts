import { Component, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() viewSet = new EventEmitter<string>();
  // @Output() recipeSet = new EventEmitter<string>();



  viewStatus:string = "recipeView";


  setRecipeView() {
    this.viewStatus = "recipeView";
    this.viewSet.emit(this.viewStatus)

  }

  setListView() {
    this.viewStatus = "listView";
    this.viewSet.emit(this.viewStatus)
  }



  constructor() { }

  ngOnInit(): void {
  }

}
