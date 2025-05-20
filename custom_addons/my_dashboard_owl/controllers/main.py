from odoo import http


class DashboardController(http.Controller):
    @http.route('/my_dashboard/data', type='json', auth='user')
    def dashboard_data(self):
        # Fetch last 20 confirmed sales orders
        Order = http.request.env['sale.order']
        orders = Order.search([
            ('state', 'in', ['sale', 'done'])
        ], limit=20, order='date_order desc')

        # Prepare JSON response
        data = []
        for o in orders:
            data.append({
                'name': o.name,
                'amount_total': float(o.amount_total),
                'date_order': o.date_order.strftime('%Y-%m-%d'),
            })
        return data