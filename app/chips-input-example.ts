import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component,ViewChild, ElementRef, AfterViewInit, Renderer2, OnInit} from '@angular/core';
import {MatChipInputEvent} from '@angular/material/chips';
import { MatSelect } from '@angular/material';

export interface Fruit {
  name: string;
}

/**
 * @title Chips with input
 */
@Component({
  selector: 'chips-input-example',
  templateUrl: 'chips-input-example.html',
  styleUrls: ['chips-input-example.css'],
})
export class ChipsInputExample implements OnInit {
  
  /*visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  fruits: Fruit[] = [
    {name: 'Lemon'},
    {name: 'Lime'},
    {name: 'Apple'},
  ];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }*/

  constructor(public renderer: Renderer2) {
}
  ngOnInit(){}

  ngAfterViewInit(){
   //console.log(document.getElementById('test1'));    // rendered
   for (let i = 0; i < this.funds.length;i++) {
      (<HTMLInputElement>document.getElementById(i + '_check-input')).setAttribute('value', 'false');
      //(<HTMLInputElement>document.getElementById(i + '_list')).disabled = false;
    }
}

  cancels: any[] = [
    {id : 0, name: '', value: ''},
    {id : 1, name: 'Cancelled by the AIFM', value: 'C'},
    {id: 2, name: 'Cancelled by the CA', value: 'D'}
  ]

  funds: any[] = [
    {value: 1, label: 'Fundo uno', selected: true},
    {value: 2, label: 'Fundo dos', selected: false},
    {value: 3, label: 'Fundo tres', selected: false}
  ];

  checkedCancel: boolean = false;
  listDisabled: boolean = true;
  lists: any[];
  

  /*checkCancel (cancel,e,f,i: string) {
    if (!cancel) {
      document.getElementById(i + '_check').setAttribute('checked', 'false');
    }
  }*/

  getOption (type, fund, event) {
    console.log(event);
  }

  calDis(f,i,e) {
    
    //console.log(i + '_cancel');
    console.log(document.getElementById((i+1) + '_list').getAttribute('disabled'));
    if (!f.selected && !document.getElementById((i+1) + '_list').getAttribute('disabled')) {
      return true;
    }
    else {
      return false
    }
  }

  checkFund (fund,i: string) {
    fund.selected = !fund.selected;
    if (!fund.selected) {
      (<HTMLInputElement>document.getElementById(i + '_check-input')).setAttribute('value', 'false');
      (<HTMLInputElement>document.getElementById(i + '_list')).value = '';
      //(<HTMLInputElement>document.getElementById(i + '_check-input')).checked = false;

    }else{
      (<HTMLInputElement>document.getElementById(i + '_check-input')).setAttribute('value', 'true');
      (<HTMLInputElement>document.getElementById(i + '_list')).value = '';
      //(<HTMLInputElement>document.getElementById(i + '_check-input')).checked = true;
    }
  }

  checkCancel (e,i) {
    if (e.checked == true) {
      (<HTMLInputElement>document.getElementById(i + '_list')).disabled = false;
    }else{
      (<HTMLInputElement>document.getElementById(i + '_list')).disabled = true;
      (<HTMLInputElement>document.getElementById(i + '_list')).value = '';
    }
  } 

  cal(i){
    debugger;
    if ((<HTMLInputElement>document.getElementById(i + '_check-input')).getAttribute('value') == 'false') {
      (<HTMLInputElement>document.getElementById(i + '_list')).setAttribute('disabled', 'false');
    }else{
      (<HTMLInputElement>document.getElementById(i + '_list')).setAttribute('disabled', 'true');
    }
  }

}


