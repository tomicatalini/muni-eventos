import { Menu } from "../core/models/menu";

export class MenuData {
    private opciones: Menu[] = [
        {text: 'Juegos', active: true, icon:'extension'},
        {text: 'Opiniones', active: true},
        {text: 'Votaciones', active: true, icon: 'how_to_vote'},
        {text: 'Tramites', active: false},
    ];

    constructor(){}

    getOpciones(): Menu[]{
        return this.opciones;
    }
}