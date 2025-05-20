import { Component, onWillStart, useRef } from "@odoo/owl";

export class Child extends Component {
    static template = "mi_modulo.Child";
    static props = {
        title : { type: String },
        list : { type: Array },
        slots : { type: Object },
        counter: { type: Number },
    };

    setup(){
        this.myInputRef = useRef("myInput");
        onWillStart(() => console.log("Hijo onwillstart"));
    }

    focusInput(){
        this.myInputRef.el.focus();
    }
}

