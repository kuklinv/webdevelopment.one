import {BaseComponent} from "../common/components/base.component.js";

export class NavigationComponent extends BaseComponent{
    constructor({element, navMenuSelect}) {
        super({element});
        this._navMenuSelect = navMenuSelect;
        this._render();
        this._element.querySelector('.home').addEventListener('click', (e) => {
            let target = e.target;
            return this._navMenuSelect(target.className);
        });
        this._element.querySelector('.skills').addEventListener('click', (e) => {
            let target = e.target;
            return this._navMenuSelect(target.className);
        });
        this._element.querySelector('.sandbox').addEventListener('click', (e) => {
            let target = e.target;
            return this._navMenuSelect(target.className);
        });
        this._element.querySelector('.projects').addEventListener('click', (e) => {
            let target = e.target;
            return this._navMenuSelect(target.className);
        });
        this._element.querySelector('.portfolio').addEventListener('click', (e) => {
            let target = e.target;
            return this._navMenuSelect(target.className);
        });
        this._element.querySelector('.blog').addEventListener('click', (e) => {
            let target = e.target;
            return this._navMenuSelect(target.className);
        });
    }
    _render() {
        this._element.innerHTML = `
         <div class="container-fluid">
            <div class="divPanel topArea notop nobottom">
                <div class="row-fluid">
                    <div class="span12">
                        <div id="divLogo" class="pull-left">
                            <a href="index.html" id="divSiteTitle">DEVELOPER PAGE</a><br/>
                            <a href="index.html" id="divTagLine">Your Welcome </a>
                        </div>
                        <div id="divMenuRight" class="pull-right">
                            <div class="navbar">
                                <div class="nav-collapse">
                                    <ul class="nav nav-pills ddmenu">
                                        <li class="dropdown"><a class="home" href="#">Home</a></li>
                                        <li class="dropdown "><a class="skills" href="#">my skills</a></li>
                                        <li class="dropdown "><a class="sandbox" href="#">my sandbox</a></li>
                                        <li class="dropdown "><a class="projects" href="#">projects</a></li>
                                        <li class="dropdown "><a class="portfolio" href="#">portfolio</a></li>
                                        <li class="dropdown "><a class="blog" href="#">my blog</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}