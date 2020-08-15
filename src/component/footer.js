class Navbar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>

        .fixed-bottom {
            left: 0;
            bottom: 0;
            width: 100%;
            position: fixed;
            padding: 15px;
            background-color: rgb(37, 20, 6);
            font-family: 'Philosopher', sans-serif;
            color: white;
            text-align: center;
        } 

        </style>

        <div class="fixed-bottom">
        <div class="container">
        Copyright &copy; Powered by site Citra Mirna 
        </div>
        </div>
        `;
    }
}

customElements.define("footer-elemen", Navbar);