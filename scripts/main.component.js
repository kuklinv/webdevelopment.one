import {NavigationComponent} from "./navigationComponent/navigation.component.js";
import {HeaderComponent} from "./headerComponent/header.component.js";
import {FooterComponent} from "./footerComponent/footer.component.js";
import {BaseComponent} from "./common/components/base.component.js";
import {HomeComponent} from "./pagesComponent/pagesContent/home.component.js";
import {SkillsComponent} from "./pagesComponent/pagesContent/skills.component.js";
import {SandboxComponent} from "./pagesComponent/pagesContent/sandbox.component.js";
import {ProjectsComponent} from "./pagesComponent/pagesContent/projects.component.js";
import {PortfolioComponent} from "./pagesComponent/pagesContent/portfolio.component.js";
import {BlogComponent} from "./pagesComponent/pagesContent/blog.component.js";

export class MainComponent extends BaseComponent {
    constructor({element}) {
        super({element});
        this._render();
        this._initNavigation();
        this._initHeader();
        this._initFooter();
        this._initBlog();
        this._initPortfolio();
        this._initProjects();
        this._initSandbox();
        this._initSkills();
        this._initHome();
    }

    _initNavigation() {
        this._navigation = new NavigationComponent({
            element: this._element.querySelector('.navigation'),
            navMenuSelect: (selected) => {
                if (selected === 'home') {
                    this._home._render();
                } else if (selected === 'skills') {
                    this._skills._render();
                } else if (selected === 'sandbox') {
                    this._sandbox._render();
                } else if (selected === 'projects') {
                    this._projects._render();
                } else if (selected === 'portfolio') {
                    this._portfolio._render();
                } else if (selected === 'blog') {
                    this._blog._render();
                }
            }

        });
    }

    _initHeader() {
        this._header = new HeaderComponent({
            element: this._element.querySelector('.myHeader')
        })
    }

    _initFooter() {
        this._footer = new FooterComponent({
            element: this._element.querySelector('.myFooter')
        })
    }

    _initHome() {
        this._home = new HomeComponent({
            element: this._element.querySelector('.pageContent')
        });
    }

    _initSkills() {
        this._skills = new SkillsComponent({
            element: this._element.querySelector('.pageContent')
        })
    }

    _initSandbox() {
        this._sandbox = new SandboxComponent({
            element: this._element.querySelector('.pageContent')
        })
    }

    _initProjects() {
        this._projects = new ProjectsComponent({
            element: this._element.querySelector('.pageContent')
        })
    }

    _initPortfolio() {
        this._portfolio = new PortfolioComponent({
            element: this._element.querySelector('.pageContent')
        })
    }

    _initBlog() {
        this._blog = new BlogComponent({
            element: this._element.querySelector('.pageContent')
        })
    }

    // _selectPageContent () {
    //
    // }

    _render() {
        this._element.innerHTML = `
    <div id="decorative2" class="navigation"></div>

    <div id="decorative1" style="position:relative" class="myHeader"></div>

    <div id="contentOuterSeparator"></div>

    <div class="container-fluid pageContent"></div>

    <div id="footerOuterSeparator"></div>

    <div id="divFooter" class="myFooter"></div>
        `;
    }

}
