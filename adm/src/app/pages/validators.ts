import { AbstractControl } from "@angular/forms";

export function priceRange(control: AbstractControl) {
    let precoDesconto = control.value
    precoDesconto = parseFloat(precoDesconto.replace(',','.'))
    let preco 
    if(control.parent){
        preco = control.parent.controls['preco'].value
        preco = parseFloat(preco.replace(',', '.'))
    }
    if(precoDesconto < 0 || precoDesconto > preco) {
        return { priceOutRange: true };
    } else
    return null;
}

export function price(control: AbstractControl) {
    let preco = control.value
    preco = parseFloat(preco.replace(',','.'))
    if(preco < 0) {
        return { price: true };
    } else
    return null;
}
