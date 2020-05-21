
// import {PagesContentComponent} from "../pagesContent.component";
import {BaseComponent} from "../../common/components/base.component.js";

export class ProjectsComponent extends BaseComponent{
    constructor({element}) {
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
                            <p>Projects page </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}