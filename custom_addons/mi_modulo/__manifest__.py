{
    "name": "Mi Módulo",
    "version": "18.0.1.0.0",
    "summary": "Descripción breve de mi módulo",
    "description": "Descripción detallada de mi módulo.",
    "author": "Pedro",
    "category": "Category",
    "license": "LGPL-3",
    "depends": [
        "sale",
    ],
    "data": [
        "views/sale_order_views.xml",
    ],
    "assets": {
        "web.assets_backend": [
            "/mi_modulo/static/src/components/**/*",
            "/mi_modulo/static/src/lib/my_services.js",
        ]
    },
    "installable": True,
    "application": True,
    "auto_install": False,
}
