import { Child } from "../child/child.js";
import { registry } from "@web/core/registry";
import { useService } from "@web/core/utils/hooks";
import { Component, useState, useSubEnv} from "@odoo/owl";

export class Example extends Component {
    static template = "mi_modulo.Example";
    static components = { Child };

    setup(){
        useSubEnv({data : "info"});
        this.services = useService('my_services');
        debugger;
        this.state = useState({counter: 0});
        this.message= "Hola";
    }

    increment(event){
        this.state.counter++;
    }

    alertMessage(event){
        alert(this.message);
    }
}

registry.category("view_widgets").add("example", { component: Example });
