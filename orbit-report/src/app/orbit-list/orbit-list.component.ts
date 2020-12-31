
import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-list',
  templateUrl: './orbit-list.component.html',
  styleUrls: ['./orbit-list.component.css']

})
export class OrbitListComponent implements OnInit {

  constructor() { }
  @Input() satellites: Satellite[];

  ngOnInit() {
    sort(: string): void {
      // array.sort modifies the array, sorting the items based on the given compare function
      this.satellites.sort(function(a: Satellite, b: Satellite): number {
         if(a[Satellite] < b[Satellite]) {
            return -1;
         } else if (a[Satellite] > b[Satellite]) {
            return 1;
         }
         return 0;
      })
   }
  }

}
