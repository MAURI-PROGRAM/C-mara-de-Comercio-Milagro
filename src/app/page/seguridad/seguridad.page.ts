import { Component, OnInit } from '@angular/core';
import { CoordenadasService, Coordenadas } from '../../../providers/services/coordenadas.service';
import { Observable } from 'rxjs';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-seguridad',
  templateUrl: './seguridad.page.html',
  styleUrls: ['./seguridad.page.scss'],
})




export class SeguridadPage implements OnInit {

  emergencia = 'robo';
  latitud: number;
  longitud: number;
  solicitud: Coordenadas;
  public coordenadas: Observable<Coordenadas[]>;
  constructor(
    private coordenadasService: CoordenadasService,
    public geolocation: Geolocation
  ) { }

  ngOnInit() {
    this.coordenadas = this.coordenadasService.getCordenadas();
  }

  enviarEmergencia(emergencia: string) {
    this.geolocation.getCurrentPosition().then((geoposition: any) => {
      const latitud = geoposition.coords.latitude;
      const longitud = geoposition.coords.longitude;
      console.log(this.latitud);
      console.log(this.longitud);

      this.solicitud = {
        emergencia,
        latitud,
        longitud
      };
      this.coordenadasService.addCordenadas(this.solicitud);

    });

  }


}
