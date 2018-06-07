import { Consulta } from './../../../../shared/model/consulta.model';
import { Cliente } from './../../../../shared/model/cliente.model';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ConsultaService } from '../../consulta.service';
import { Router } from '@angular/router';



@Component({
  selector: 'ngx-historico-consulta-card',
  templateUrl: './historico-consulta-card.component.html',
  styleUrls: ['./historico-consulta-card.component.scss'],
})
export class HistoricoConsultaCardComponent implements OnInit {

    @Input() consulta: Consulta;
    cliente: Cliente;


  constructor(private consultaService: ConsultaService,  private router: Router) {

  }
  ngOnInit() {
    this.buscarUsuario(this.consulta.cliente);
  }

  buscarUsuario(id) {
    this.consultaService.getCliente(id)
          .subscribe(
              (results: Cliente) => {
                  this.cliente = results;
              },
          );
    }



}
