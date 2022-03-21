import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/search-service/models/user.model';
import { SearchService } from '../../core/search-service/services/search.service';

@Component({
  selector: 'app-profiles-list',
  templateUrl: './profiles-list.component.html',
  styleUrls: ['./profiles-list.component.scss']
})
export class ProfilesListComponent implements OnInit {
  who = "Kogo chcesz znaleźć?";
  find = "Znaleźliśmy:";
  list: User[];
  listToDisplay: User[];
  search: string;
  constructor(private searchService: SearchService) { }
  ngOnInit(): void {
    this.searchService.getList().subscribe(resp => {
      this.list = resp;
      this.listToDisplay = resp;
    })
  }

  filterList(event: any): void {  
    this.listToDisplay = [];  
    let text = event.target.value.toUpperCase();
    for (let i = 0; i < this.list.length; i++) {
      this.list[i].name.toUpperCase().indexOf(text) != -1 ? this.listToDisplay.push(this.list[i]) : null;

    }
  }
}
