/** @odoo-module **/
import { Component, useState, onMounted } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useService } from "@web/core/utils/hooks";

class Dashboard extends Component {    setup() {
        this.state = useState({ orders: [] });
        this.rpc = useService("rpc");
        onMounted(this.loadData.bind(this));
    }

    async loadData() {
        const data = await this.rpc('/my_dashboard/data');
        this.state.orders = data;
    }

    get totalRevenue() {
        return this.state.orders.reduce((sum, o) => sum + o.amount_total, 0);
    }    static template = `
      <div class="o_dashboard">
        <h1>Sales Overview</h1>
        <p>Total Revenue: <t t-esc="totalRevenue"/></p>
        <table class="table table-striped">
          <thead>
            <tr><th>Order</th><th>Date</th><th>Amount</th></tr>
          </thead>
          <tbody>
            <t t-foreach="state.orders" t-as="order">
              <tr>
                <td><t t-esc="order.name"/></td>
                <td><t t-esc="order.date_order"/></td>
                <td><t t-esc="order.amount_total"/></td>
              </tr>
            </t>
          </tbody>
        </table>
      </div>`
}

// Register the client action
registry.category("actions").add("my_owl_dashboard_action", Dashboard);