import { Component, OnInit } from '@angular/core';
import { PanicoService } from '../../../providers/services/coordenadas.service';
import { Observable } from 'rxjs';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {Panico} from '../../../interface/IPanico'

@Component({
  selector: 'app-seguridad',
  templateUrl: './seguridad.page.html',
  styleUrls: ['./seguridad.page.scss'],
})

export class SeguridadPage implements OnInit {

  panico:Panico;
  
  
  constructor(
    private _panicoservice: PanicoService,
    public geolocation: Geolocation
  ) { 
    this.panico={
      latitud:'sdf',
      longitud:'sdf',
      tipo:'robo',
      usuario:'asda',
      fecha:new Date()
    }
  }

  ngOnInit() {
  }

  cambiarPanico(tipoPanico:string){
    this.panico.tipo= tipoPanico;
  }

  compararPanico(tipoPanico:string){
    return this.panico.tipo == tipoPanico;
  }

  enviarPanico(tipoPanico: string) {
    this.geolocation.getCurrentPosition().then((geoposition: any) => {
      this.panico.latitud = geoposition.coords.latitude;
      this.panico.longitud = geoposition.coords.longitude;
      this.panico.tipo =tipoPanico;
      
      this._panicoservice.addCordenadas(this.panico);

    });

  }


}
