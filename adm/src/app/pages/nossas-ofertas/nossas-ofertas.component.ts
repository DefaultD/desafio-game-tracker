import { OfertaService } from './../oferta.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nossas-ofertas',
  templateUrl: './nossas-ofertas.component.html',
  styleUrls: ['./nossas-ofertas.component.scss']
})

export class NossasOfertasComponent implements OnInit {

  displayedColumns: string[] = ['id', 'titulo', 'preco', 'precoDesconto', 'acoes'];
  dataSource;

  constructor(private service: OfertaService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((ofertas) => {
      this.dataSource = ofertas
    })
  }

}
