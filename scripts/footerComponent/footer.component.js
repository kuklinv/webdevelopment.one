import {BaseComponent} from "../common/components/base.component.js";

export class FooterComponent extends BaseComponent {
    constructor({element}) {
        super({element});
        this._render();
    }

    _render() {
        this._element.innerHTML = `
            <div class="container-fluid">
        <div class="row-fluid">
            <div class="col">
                <h3>DEVCOD.PRO</h3>
            </div>
            <div class="col">
                <ul id="contact-info">
                    <li><i class="general foundicon-phone icon"></i>
                        <span class="field">Phone:</span>+7(913)-900-41-20
                    </li>
                    <li><i class="general foundicon-mail icon"></i>
                        <span class="field">Email:</span><a href="mailto:vitalykuklin@gmail.com" title="Email">vitalykuklin@gmail.com</a>
                    </li>
                    <li><i class="general foundicon-home icon" style="margin-bottom:50px"></i>
                        <span class="field">Address:</span>630005 Novosibirsk Russia
                    </li>
                </ul>
            </div>
        </div>
        <div class="row-fluid centered_menu">
            <div class="span12">
                <p class="copyright centered_menu">
                    Copyright © 2019 Vitaly Kuklin. All Rights Reserved.
                </p>
                <p class="social_bookmarks centered_menu">
                    <a href="https://github.com/kuklinv"><i class="social foundicon-github"></i> GitHub</a>
                    <a href="https://www.facebook.com/vkuklin"><i
                            class="social foundicon-facebook"></i> Facebook</a>
                    <a href="https://twitter.com/kuklinv"><i class="social foundicon-twitter"></i> Twitter</a>
                    <a href="https://www.linkedin.com/in/куклин-виталий-49435135/"><i
                            class="social foundicon-linkedin"></i> LinkedIn</a>
                    <a href="https://www.pinterest.ru/kuklinv/"><i class="social foundicon-pinterest"></i> Pinterest</a>
                </p>
            </div>
        </div>
    </div>
        `;
    }
}