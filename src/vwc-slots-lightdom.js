const template = document.createElement('template');
template.innerHTML = `
    <div>
        <p>Text vor Slot</p>
        <slot></slot>
        <p>Text nach Slot</p>
    </div>
`;

export class VwcSlotsLightdom extends HTMLElement {

    constructor() {
        super();
        this.appendChild(document.importNode(template.content, true));
    }

    async connectedCallback() {

    }

}

customElements.define('vwc-slots-lightdom', VwcSlotsLightdom);
