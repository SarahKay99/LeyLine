
fetch("/components/addBugFormComponent/componentTest.html")
    .then((response)  => {
        response.text()
        .then((res) => {
            class AddBugComponent extends HTMLElement {
                constructor() {
                    super();
                    const parser = new DOMParser();
                    let html = parser.parseFromString(res, 'text/html');
                    
                    let shadowRoot = this.attachShadow({mode: 'open'});
                    console.log(res);
                    shadowRoot.appendChild(html.getElementById('addBugTemplate').content.cloneNode(true));
                }
            }
            customElements.define('bug-new-button', AddBugComponent);
    })    
})


