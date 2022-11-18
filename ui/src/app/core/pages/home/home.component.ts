import { Component, OnInit } from '@angular/core';
import { MenuData } from 'src/app/data/menues';
import { Menu } from '../../models/menu';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private menuData: MenuData = new MenuData();
  public menues: Menu[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.menuData.getOpciones());
    this.menues = this.menuData.getOpciones();
  }

}
