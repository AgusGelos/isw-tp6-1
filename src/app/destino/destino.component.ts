import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-destino',
  templateUrl: './destino.component.html',
  styleUrls: ['./destino.component.css']
})
export class DestinoComponent implements OnInit {

  constructor(public formBuilder: FormBuilder) { }
  calendar: boolean;
  FormDestino: FormGroup; 
  ListoDestino: boolean;
  today = new Date();
  time = this.today.getDate();
  
  ngOnInit() {
    this.calendar = false;
    this.ListoDestino = false;
    this.FormDestino = this.formBuilder.group(
      {
        DirDestino:["",[Validators.required,Validators.minLength(4),Validators.maxLength(50)]],
        NroDestino: [null,[Validators.required,Validators.pattern("[0-9]{1,7}")]],
        TorreDestino: [null,[Validators.required,Validators.pattern("[0-9]{1,7}")]],
        PisoDestino: [null,[Validators.required,Validators.pattern("[0-9]{1,7}")]],
        RefDestino:[null,[Validators.maxLength(255)]]
      })
  }
  
  habilitar(){
    this.calendar = true;
    return;
  }
  deshabilitar(){
    this.calendar= false;
  }

}