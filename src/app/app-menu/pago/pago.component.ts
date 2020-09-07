import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {
  tarjeta: boolean;
  efectivo: boolean;
  FormEfectivo: FormGroup;
  FormTarjeta: FormGroup;
  submitted = false;

  constructor(
    public formBuilder: FormBuilder,

  ) { }

  ngOnInit() {
    this.efectivo = true;
    this.FormEfectivo = this.formBuilder.group({Abonado:[null, [Validators.required, Validators.pattern("[0-9]{1,7}")]],});
    this.FormTarjeta = this.formBuilder.group(
      {Name:[null,[Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      Nro:[null,[Validators.required, Validators.pattern("[0-9]{4}[-][0-9]{4}[-][0-9]{4}[-][0-9]{4}")]],
      Fecha: ["",[Validators.required,
          Validators.pattern(
            "([0]{1}[1-9]{1}||[1]{1}[0-2]{1})[-][2]{1}[0-9]{3}")]],
      Crc:[null,[Validators.required, Validators.pattern("[0-9]{3}")]]      
      })

  }

  efectiv(){
    this.efectivo = true;
    this.tarjeta = false;
  }

  td(){
    this.tarjeta = true;
    this.efectivo= false;
  }
  submit(){
    
    this.submitted = true;
    if(this.tarjeta){
      if(this.FormTarjeta.invalid){
        return;
      }
      else{
        //Imprimir por MSJ el pedido
      }      
    }
    if(this.efectivo){
      if(this.FormEfectivo.invalid){
        return;
      }
      else{
        //Imprimir el MSJ del pedido
      }
    }
  }
}