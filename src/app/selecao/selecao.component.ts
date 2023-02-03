import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-selecao',
  templateUrl: './selecao.component.html',
  styleUrls: ['./selecao.component.css']
})
export class SelecaoComponent implements OnInit {

  @Input("escolhaAte") qtdEscolhas: number = 0;
  @Input("opcoes") opcoes: string[] = [];
  @Input() titulo: string = '';
  qtdSelecionados: number = 0;
  desabilitar: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  select($event: any) {
    if ($event.target.checked)
      this.qtdSelecionados++;
    else
      this.qtdSelecionados--;

    if (this.qtdSelecionados >= this.qtdEscolhas)
      this.desabilitar = true;
    else
      this.desabilitar = false;
  }

}
