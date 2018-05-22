/**
 * Created by jinliang on 2018/5/23.
 */
import {Text} from "./Text"
import {View} from "./View";
class Page {
    private view:View;

    constructor() {
    }

    onCreate() {
        this.view = new Text()
    }
}