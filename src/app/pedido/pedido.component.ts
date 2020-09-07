import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  
  ListoOrigen: boolean;
  FormOrigen: FormGroup;
  GotoDestino: boolean;

  constructor(
    public formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.ListoOrigen = false;
    this.GotoDestino = false;
    this.FormOrigen = this.formBuilder.group(
      {
        QueOrigen:["",[Validators.required,Validators.minLength(4),Validators.maxLength(50)]],
        DirOrigen:["",[Validators.required,Validators.minLength(4),Validators.maxLength(50)]],
        NroOrigen: [null,[Validators.required,Validators.pattern("[0-9]{1,7}")]],
        TorreOrigen: [null,[Validators.required,Validators.pattern("[0-9]{1,7}")]],
        PisoOrigen: [null,[Validators.required,Validators.pattern("[0-9]{1,7}")]],
        RefOrigen:[null,[Validators.maxLength(255)]],
        MontoOrigen:["",[Validators.required,Validators.pattern("[0-9]{1,7}")]]
      })
  }
  destino(){
    if(this.FormOrigen.invalid){
      return;
    }
    else{
    this.GotoDestino = true;      
    }
  }

}