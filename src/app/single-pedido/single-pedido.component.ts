import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-single-pedido',
  templateUrl: './single-pedido.component.html',
  styleUrls: ['./single-pedido.component.css']
})
export class SinglePedidoComponent implements OnInit {

  //-----------------------Origen
  
  ListoOrigen: boolean;
  FormOrigen: FormGroup;
  GotoDestino: boolean;
  GotoMapa: boolean;
  Mapa: boolean;

  //---------------------------Destino
  calendar: boolean;
  FormDestino: FormGroup; 
  ListoDestino: boolean;
  pasarFP: boolean;
  today = new Date();
  time = this.today.getDate();

  //--------------------------- Pago
  tarjeta: boolean;
  efectivo: boolean;
  FormEfectivo: FormGroup;
  FormTarjeta: FormGroup;
  submitted = false;

  constructor(
    public formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    //--------------------------------------------- Origen
    this.ListoOrigen = false;
    this.GotoDestino = false;
    this.GotoMapa = false;
    this.Mapa = false;
    this.FormOrigen = this.formBuilder.group(
      {
        QueOrigen:["",[Validators.required,Validators.minLength(4),Validators.maxLength(50)]],
        DirOrigen:["",[Validators.required,Validators.minLength(4),Validators.maxLength(50)]],
        NroOrigen: [null,[Validators.required,Validators.pattern("[0-9]{1,7}")]],
        TorreOrigen: [null,[Validators.pattern("[0-9]{1,7}")]],
        PisoOrigen: [null,[Validators.pattern("[0-9]{1,7}")]],
        RefOrigen:[null,[Validators.maxLength(255)]],
        MontoOrigen:["",[Validators.required,Validators.pattern("[0-9]{1,7}")]]
      })
  //-----------------------------------------------Destino
    this.calendar = false;
    this.ListoDestino = false;
    this.pasarFP = false;
    this.FormDestino = this.formBuilder.group(
      {
        DirDestino:["",[Validators.required,Validators.minLength(4),Validators.maxLength(50)]],
        NroDestino: [null,[Validators.required,Validators.pattern("[0-9]{1,7}")]],
        TorreDestino: [null,[Validators.pattern("[0-9]{1,7}")]],
        PisoDestino: [null,[Validators.pattern("[0-9]{1,7}")]],
        RefDestino:[null,[Validators.maxLength(255)]]
      })

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
  
  destino(){
    if(this.FormOrigen.invalid){
      this.ListoOrigen = true;
      return;
    }
    else{
    this.GotoDestino=true; 
    }
  }

  volverOrigen(){
    this.GotoMapa = false;
    this.GotoDestino = false;
  }

  mapa(){
    if(this.FormOrigen.controls.QueOrigen.invalid){
      this.Mapa = true;
      return;
    }
    else{
      this.GotoMapa = true;
    }
  }

  habilitar(){
  this.calendar = true;
  return;
  }
  deshabilitar(){
    this.calendar= false;
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
        console.log("Subido");
      }      
    }
    if(this.efectivo){
      if(this.FormEfectivo.invalid){
        return;
      }
      else{
        console.log("Subido");
      }
    }
  }

  formaPago(){
    if(this.FormDestino.invalid){
      this.ListoDestino = true;
      return;      
    }
    else{
      var pedido = (document.getElementById("day") as HTMLInputElement).value;
      let diaPedido = pedido.toString().split("-") ;
      var horaPedido = (document.getElementById("hh") as HTMLInputElement).value;
     
      let fecha = new Date();
      let hoy = fecha.getDate();
      let mes = fecha.getMonth()+1;
      let anio = fecha.getFullYear()
      let hora = fecha.getHours()  

      if(parseInt(diaPedido[0]) >= anio && parseInt(diaPedido[1]) >= mes && parseInt(diaPedido[2]) >= hoy){
        if(parseInt(diaPedido[2])==hoy && parseInt(horaPedido)< hora+1){
          console.log("Fecha Incorrecta.")       
        }
        else{        
        this.pasarFP = true;
        this.GotoDestino = false;
      } 
        
      }
      else{
        console.log("Fecha Incorrecta.")
      }     
    }
  }

  volverDestino(){
    this.pasarFP = false;
    this.GotoDestino = true;
  }



}