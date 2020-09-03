import { Component, Input, OnInit } from '@angular/core';

import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [],
})
export class DonaComponent implements OnInit {
  @Input() title = 'Sin titulo';
  @Input() labels: Label[] = ['Label1', 'Label2', 'Label3'];
  @Input() data: MultiDataSet = [[null, null, null]];

  public colors: Color[] = [
    { backgroundColor: ['#6857E6', '#009FEE', '#F02059'] },
  ];
  constructor() {}

  ngOnInit(): void {}
}
