import {Component} from '@angular/core';
import {NoticiaService} from "./services/noticia.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listNoticias: any[] = []
  loading = false

  constructor(private _noticiaService: NoticiaService) {
  }

  buscarNoticia(params: any) {
    this.loading = true
    this.listNoticias = []
    this._noticiaService.getNoticia(params).subscribe(data => {
      this.loading = false
      console.log(data)
      this.listNoticias = data.articles
    }, error => this.loading = false)
  }
}
