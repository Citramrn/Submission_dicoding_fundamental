class Jumbotron extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="jumbotron jumbotron-fluid">
        <div class="container text">
            <img src="src/img/myfoto.jpg" alt="fotoku">
            <p class="lead">Nama saya Citra Mirna Wati lahir di Blitar, 09 Maret 1999 <br> Saya masih mahasiswa
                yang bergelut di bidang Front End Developer <br> saya Berkuliah di Universitas Nahdlatul Ulama
                Blitar
                semester 4<br>
            </p>
        </div>
        </div>
        `;
    }
}

customElements.define("header-fluid", Jumbotron);