class Nav extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    set clickEvent(event){
        this._clickEvent = event;
        this.render();
    }

    get value(){
        return this.querySelector("#searchButton").value;
    }

    render() {
        this.innerHTML = `
        <nav class="navbar">
        <div class="container">
            <a class="navbar-brand">FoodMeal Cafe</a>
            <form class="form-inline">
                <input class="form-control mr-sm-2" id="searchFood" type="search" placeholder="Search"
                    aria-label="Search">
                <button class="btn btn-outline-warning my-2 my-sm-0" id="searchButton" type="button">Search</button>
            </form>
        </div>
        </nav>
        `;

        this.querySelector("#searchButton").addEventListener("click", this._clickEvent);
    }
}

customElements.define("navbar-nav", Nav);