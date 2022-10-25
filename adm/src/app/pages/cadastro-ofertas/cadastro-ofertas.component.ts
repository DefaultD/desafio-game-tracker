import { AbstractControl } from '@angular/forms';
import { OfertaService } from './../oferta.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { priceRange, price } from "../validators";

@Component({
  selector: 'app-cadastro-ofertas',
  templateUrl: './cadastro-ofertas.component.html',
  styleUrls: ['./cadastro-ofertas.component.scss']
})
export class CadastroOfertasComponent implements OnInit {

  formulario!: FormGroup
  numberRegEx = /\-?\d*\.?\d{1,2}/;
  lojas = [
    { id: 1, nome: 'Epic' },
    { id: 2, nome: 'Origin' },
    { id: 3, nome: 'Steam' },
  ];

  constructor(private service: OfertaService, private router: Router, private formBulder: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.formBulder.group({
      id: [0],
      titulo: ['', Validators.required],
      preco: ['', Validators.compose([Validators.required, price])],
      precoDesconto: ['', Validators.compose([Validators.required, priceRange])],
      loja: [1, Validators.required],
      descricao: ['']
    })
    this.setId()
  }

  priceValidator(control: AbstractControl) {
    let preco = this.formulario.get(['preco']).value
    preco = parseFloat(preco.replace(',', '.'))

    if (control.value > 0 || control.value < preco) {
        return { 'priceRange': true };
    }
    return null;
  }

  criarOferta() {
    if (this.formulario.valid) {
      this.service.criar(this.formulario.value).subscribe(() => {
        this.router.navigate(['/nossasofertas'])
      })
    }
  }

  setId() {
    this.service.listar().subscribe((ofertas) => {
      let id = ofertas.length + 1
      this.formulario.get(['id']).setValue(id)
    })
  }
}
