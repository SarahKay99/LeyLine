fetch("/components/anotherComponent/renderBugComponent.html")
    .then((response)  => {
        response.text()
        .then((res) => {
            class BugCardComponent extends HTMLElement {
                set bug(value) {
                    this._bug = value;
                }

                get bug() {
                    return this._bug;
                }

                constructor() {
                    super();
                    this._bug;

                    const parser = new DOMParser();
                    let html = parser.parseFromString(res, 'text/html');

                    let shadowRoot = this.attachShadow({mode: 'open'});
                    console.log(html);
                    shadowRoot.appendChild(html.getElementById('bugCardTemplate').content.cloneNode(true));
                    
                    let classes = html.getElementsByClassName('list-group-item');
                    console.log(classes);
                    classes[0].setAttribute('bugid', this.bug);
                }
                
            }
            customElements.define('render-bug-component', BugCardComponent);
    })    
})
