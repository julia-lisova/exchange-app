import {Component, Input} from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import {CurrencyType} from "../convert-currency.response";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})

export class ChildComponent {
  @Output() newAmountEvent = new EventEmitter();
  @Output() newCurrencyEvent = new EventEmitter();

  @Input() amount?:number;
  @Input() currency?:CurrencyType;

}
