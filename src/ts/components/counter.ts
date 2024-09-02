// New component
class Counter extends HTMLElement {
    constructor() {
        super();
        
        this.innerHTML = /*html*/`
            <button>Clicks : ${count}</button>
        `;

        let btn = this.querySelector("button");

        // State
        if(btn) {
	  btn.onclick = () => {
	    // @ts-ignore
            btn.innerHTML = "Clicks : " + ++count;
          };
	}
    }
}

var count = 0;

customElements.define("click-counter", Counter);
