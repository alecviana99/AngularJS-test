import {Injectable} from "angular2/core";
import {GameItem} from "./game-item";

/**
 *
 */
@Injectable()
export class GameService {
    getItems(count:number): Promise<GameItem[]>{
        var i:number = 0;
        var result:GameItem[] = [],
            item:GameItem,
            previousItem: GameItem = null;

        while(i<count){
            item = new GameItem(i,`${i + 1}`);

            if(previousItem){
                previousItem.next = item;
                item.previous = previousItem;
            }

            previousItem = item;

            result.push(item);

            i++;
        }

        previousItem.next = result[0];
        result[0].previous = previousItem;

        return Promise.resolve(result);
    }
}