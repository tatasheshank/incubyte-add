import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculator-demo';
  inputVal = ''

  addValues(inputVal: string) {
    inputVal= inputVal.replaceAll('\\n','');
    const delimiter = this.detectDelimiter(inputVal) || ',';
    if (!delimiter && /^-?\d+$/.test(inputVal)) {
        return Number(inputVal);
    }
    const escapedDelimiter = delimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // Escape special characters
    const pattern = new RegExp(`^-?\\d+(\\${escapedDelimiter}-?\\d+)*$`);
    if (pattern.test(inputVal + '')) {
      const numArray = inputVal.split(delimiter);
      const negativeNumbers=  numArray.filter(item=> Number(item)<0);
      if(negativeNumbers.length>0){
        throw new Error(`negative numbers not allowed ${negativeNumbers.join(',')}`);
      }
      const sum = numArray.reduce((acc, num) => acc + parseFloat(num), 0);
      return sum;
    }
    return 0
  }

  detectDelimiter(str: string) {
    const match = str.match(/[^-\d]/);
    return match ? match[0] : null;
  }

}
