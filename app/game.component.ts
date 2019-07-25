import {Component} from 'angular2/core';
import {OnInit} from "angular2/core";
import {GameService} from "./game.service";
import {GameItem} from "./game-item";
import {NgClass} from "angular2/common";
@Component({
    selector: 'game',
    providers: [GameService],
    directives: [NgClass],
    templateUrl: 'app/game.component.html'
})
export class GameComponent {
    public title = 'AngularJS Gaming';
    public origin:GameItem[];
    public deadItems:GameItem[];
    public noOfPlayer:number = 100;
    public done:boolean = false;

    constructor(private _gameService:GameService) {
        this.deadItems = [];
    }

    nextTurn(head, skip) {
        this.deadItems.push(head);

        head.dead = true;

        head.previous.next = head.next;
        head.next.previous = head.previous;

        var counter = 0;

        head = head.next;

        while (counter < skip) {
            head = head.next;
            counter++;
        }

        return head;
    }

    play() {
        var index = -1;
        var skip = 1;
        var items = this.origin;
        var survivalCount = items.length;
        var temp = items.length;
        var head = this.origin[0];

        var interval = setInterval(() => {
            if (head.next != head && survivalCount > 1) {
                head = this.nextTurn(head, skip);

                index += skip;

                skip++;

                survivalCount--;

                if (skip + index > temp + survivalCount) {
                    temp = temp + survivalCount;
                }

                console.log(`SurvivalCount: ${survivalCount} Index: ${index} Skip: ${skip}`);
            } else {
                clearInterval(interval);

                this.done = true;
            }
        }, 100);
    }

    start() {
        this.done = false;

        this._gameService.getItems(this.noOfPlayer > 0 ? this.noOfPlayer : 100).then(items => {
            this.origin = items;

            this.play();
        });
    }
}

