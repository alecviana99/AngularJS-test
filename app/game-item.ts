export class GameItem {
    public dead:boolean = false;
    public next: GameItem;
    public previous: GameItem;

    constructor(public index:number, public title:string){}
}

