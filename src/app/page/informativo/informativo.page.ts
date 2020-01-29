import { Component, OnInit } from '@angular/core';
import { PanicoService } from '../../../providers/services/coordenadas.service';
import {Panico} from '../../../interface/IPanico';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-informativo',
  templateUrl: './informativo.page.html',
  styleUrls: ['./informativo.page.scss'],
})
export class InformativoPage implements OnInit {

  public coordenadas: Observable<Panico[]>;
  constructor(
    private _panicoservice: PanicoService,

  ) { 
    this.coordenadas = this._panicoservice.getCordenadas();
  }

  ngOnInit() {
  }

}
