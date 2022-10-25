import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { OfertaService } from './../oferta.service';
import { Oferta } from './../ofertas';
import { Component, OnInit } from '@angular/core';
import { priceRange, price } from "../validators";

@Component({
  selector: 'app-editar-oferta',
  templateUrl: './editar-oferta.component.html',
  styleUrls: ['./editar-oferta.component.scss']
})
export class EditarOfertaComponent implements OnInit {

  formulario!: FormGroup

  lojas = [
    { id: 1, nome: 'Epic' },
    { id: 2, nome: 'Origin' },
    { id: 3, nome: 'Steam' },
  ];

  constructor(
    private service: OfertaService,
    private router: Router,
    private formBulder: FormBuilder,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')

    this.formulario = this.formBulder.group({
      id: [0],
      titulo: [``, Validators.required],
      preco: ['', Validators.compose([Validators.required, price])],
      precoDesconto: ['', Validators.compose([Validators.required, priceRange])],
      loja: [1, Validators.required],
      descricao: ['']
    })

    this.service.buscarPorId(parseInt(id)).subscribe((oferta) => {
      console.log(oferta)
      this.formulario.get(['id']).setValue(oferta.id)
      this.formulario.get(['titulo']).setValue(oferta.titulo)
      this.formulario.get(['preco']).setValue(oferta.preco)
      this.formulario.get(['precoDesconto']).setValue(oferta.precoDesconto)
      this.formulario.get(['loja']).setValue(oferta.loja)
      this.formulario.get(['descricao']).setValue(oferta.descricao)
    })
  }

  editarOferta() {
    this.service.editar(this.formulario.value).subscribe(() => {
      this.router.navigate(['/nossasofertas'])
    })
  }

}
