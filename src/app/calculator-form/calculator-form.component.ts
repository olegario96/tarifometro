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
  error = false;
  jan = false;
  feb = false;
  currentMonth = 'Jan';

  constructor() { }

  ngOnInit() { }

  calculate() {
    if (this.consuption === null || this.consuption === undefined) {
      this.error = true;
    } else {
      if (this.currentMonth === 'Janeiro') {
        if (this.consuption <= 150) {
          this.result = parseFloat((this.consuption * 0.654).toFixed(2));
        } else {
          this.result = parseFloat((98.1 + ((this.consuption - 150) * 0.782)).toFixed(2));
        }
      } else if (this.currentMonth === 'Fevereiro') {
        if (this.consuption <= 150) {
          this.result = parseFloat((this.consuption * 0.631).toFixed(2));
        } else {
          this.result = parseFloat((94.65 + ((this.consuption - 150) * 0.749)).toFixed(2));
        }
      }
      this.error = false;
      this.clicked = true;
    }
  }

  showJan() { this.jan = true; this.feb = false; this.currentMonth = 'Janeiro'; }

  showFeb() { this.jan = false; this.feb = true; this.currentMonth = 'Fevereiro'; }
}
