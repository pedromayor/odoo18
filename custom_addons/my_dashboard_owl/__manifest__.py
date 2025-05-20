{
    'name': 'My OWL Dashboard',
    'version': '18.0.1.0',
    'summary': 'Custom dashboard using OWL in Odoo 18',
    'author': 'Pedro',
    'category': 'Tools',
    'depends': ['web', 'sale'],
    'data': [
        'views/dashboard_template.xml',
    ],
    'assets': {
        'web.assets_backend': [
            "my_dashboard_owl/static/src/js/dashboard.js",
        ],
    },
    'installable': True,
    'application': False,
}