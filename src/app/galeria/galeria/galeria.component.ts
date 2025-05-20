import {Component, OnInit} from '@angular/core';
import {LugarService} from '../../lugares/lugar.service';
import {CategoriaService} from '../../categorias/categoria.service';
import {Lugar} from '../../lugares/lugar';
import {Categoria} from '../../categorias/categoria';

@Component({
  selector: 'app-galeria',
  standalone: false,
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.scss'
})
export class GaleriaComponent implements OnInit {
  lugares: Lugar[] = [];
  categoriasFiltro: Categoria[] = [];
  nomeFiltro: string = '';
  categoriaFiltro: string = '';


  ngOnInit(): void {
    this.categoriaService.obterTodas().subscribe(categorias => this.categoriasFiltro = categorias);

    this.lugarService.obterTodos().subscribe(lugares => this.lugares = lugares);
  }

  constructor(
    private lugarService: LugarService,
    private categoriaService: CategoriaService,
  ) {
  }

  getTotalEstrelas(lugar: Lugar) {
    return '&starf;'.repeat(lugar.avaliacao || 0) + '&star;'.repeat(5 - (lugar.avaliacao || 0));
  }

  filtrar() {
    this.lugarService.filtrar(this.nomeFiltro, this.categoriaFiltro).subscribe(lugares => this.lugares = lugares);
  }
}
