export default class ScrollContainer extends HTMLElement {
    constructor() {
        super();
        const sheet = new CSSStyleSheet();
        sheet.replaceSync(`
        :host {
            display: block;
            position: relative;
            height: 100%;
            width: 100%;
        }
        
        .wrapper {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            overflow-y: clip;
        }

        .secondWrapper {
            height: 100%;
            overflow-y: auto;
        }

        `
        );
        const shadow = this.attachShadow({ mode: 'open' });
        this.shadowRoot.adoptedStyleSheets = [sheet];

        const wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');

        const secondWrapper = document.createElement('div');
        secondWrapper.classList.add('secondWrapper');

        const slot = document.createElement('slot');

        secondWrapper.append(slot)
        wrapper.append(secondWrapper);
        this.shadowRoot.append(wrapper);
    }
}