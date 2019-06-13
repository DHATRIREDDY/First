import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zcomp',
  template: `<div *ngIf="name; then  thenBlock; else elseBlock"></div>

             <ng-template #thenBlock>
               <h2>welcome to worldcup</h2>
              </ng-template>

             <ng-template #elseBlock>
              <h2>welcome Aditi</h2>
             </ng-template>  `,
  styles: []
}) 
export class ZcompComponent implements OnInit {
  public name=true;

  constructor() { }

  ngOnInit() {
  }

}
