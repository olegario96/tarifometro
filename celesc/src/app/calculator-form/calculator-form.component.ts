import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator-form',
  templateUrl: './calculator-form.component.html',
  styleUrls: ['./calculator-form.component.css']
})
export class CalculatorFormComponent implements OnInit {

  consuption = null;
  result = 0.0;
  clicked = false;

  constructor() { }

  ngOnInit() { }

  calculate() {
    if (this.consuption === null) {
      console.log('vsfff');
    } else {
      if (this.consuption <= 150) {
        this.result = this.consuption * 0.654;
      } else {
        this.result = 98.1 + ((this.consuption - 150) * 0.782);
      }
      this.clicked = true;
    }
  }
}
