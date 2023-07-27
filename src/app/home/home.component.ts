import { Component, Input } from '@angular/core';
import { ICep } from '../icep';
import {ViacepService} from '../viacep.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  constructor(private viacepService: ViacepService) {}
    
  isHidden: boolean = false;

  @Input() buscaCep: string = '';
  cepInfo: any;

  getCep() {
    if(this.buscaCep.length > 8) {
      return 0;
    }
    return this.viacepService.List(this.buscaCep).subscribe(data => this.cepInfo = data);
  }

  clearCep() {
    this.cepInfo = null
  }


}
