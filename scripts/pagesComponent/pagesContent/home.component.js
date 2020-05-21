
import {BaseComponent} from "../../common/components/base.component.js";

export class HomeComponent extends BaseComponent{
    constructor({element}){
        super({element});
        this._render();
    }
    _render() {
        this._element.innerHTML = `
        <div class="divPanel page-content">

            <div class="row-fluid">

                <div class="span12" id="divMain">

                    <div class="span4 sidebar">

                        <div class="sidebox">
                            <h3 class="sidebox-title">DEVCOD.PRO</h3>
                            <p>This is my personal page = (all in one) => business card,
                             experimental site, training sandbox and portfolio
                             </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}