import {BaseComponent} from "../common/components/base.component.js";

export class HeaderComponent extends BaseComponent {
    constructor({element}) {
        super({element});
        this._render();
    }
    _render() {
        this._element.innerHTML = `
                <div class="container-fluid">

            <div class="divPanel headerArea">
                <div class="row-fluid">
                    <div class="span12">

                        <div id="headerSeparator"></div>

                        <div id="divHeaderText" class="page-content">
                            <div id="divHeaderLine1">Vitaly Kuklin</div>
                            <br/>
                            <div id="divHeaderLine2"> web developer</div>
                            <br/>
                        </div>

                        <div id="headerSeparator2"></div>

                    </div>
                </div>

            </div>

        </div>
        `;
    }
}