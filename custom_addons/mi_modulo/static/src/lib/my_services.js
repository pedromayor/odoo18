import { registry } from "@web/core/registry";
import { useService } from "@web/core/utils/hooks";


const myObject = {
    dependencies: ['notification'],
    start(env, { notification }) {
        setInterval(() => {
            notification.add("hola");
        }, 5000);
        return "hello world";
    }
}

registry.category("services").add("my_services", myObject);