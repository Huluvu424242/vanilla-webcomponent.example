const template = document.createElement('template');
template.innerHTML = `
<style>
p {
    color:blue;
}
div {
    color:red;
}
#text {
    background: lightgray;
}
</style>
        <h3 id="2first">Shadow DOM Example</h3>
        <p>Innerer Text vor Slot gestyled background von außen und color von innen</p>
        <slot name="main"></slot>
        <p id="text1">Innerer Text nach Slot gestyled background und color von innen, style innen überschreibt außen background</p>
        <p id="text2">2. Text</p>
        <p id="text3">3.Text</p>
`;

export class VwcSlotsLightdom extends HTMLElement {

    constructor() {
        super();
        let shadow = this.attachShadow({mode: 'open'});
        shadow.appendChild(document.importNode(template.content, true));
    }

    async connectedCallback() {
        if(console){
            console.log("####vwc-slots-shadowdom eingehängt");
        }
    }

}

window.customElements.define('vwc-slots-shadowdom', VwcSlotsLightdom);
