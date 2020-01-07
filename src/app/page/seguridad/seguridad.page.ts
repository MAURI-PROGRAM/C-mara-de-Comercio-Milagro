import { Component, OnInit } from '@angular/core';
import { CoordenadasService, Coordenadas } from '../../../providers/services/coordenadas.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-seguridad',
  templateUrl: './seguridad.page.html',
  styleUrls: ['./seguridad.page.scss'],
})
export class SeguridadPage implements OnInit {

  public coordenadas: Observable<Coordenadas[]>;
  constructor(
    private coordenadasService: CoordenadasService
  ) { }

  ngOnInit() {
    this.coordenadas = this.coordenadasService.getCordenadas();
  }

}
