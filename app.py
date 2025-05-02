
from flask import Flask, jsonify
import sqlite3

from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})

DB_NAME = 'ecommerce.db'


def get_db_connection():
    conn = sqlite3.connect(DB_NAME)
    conn.row_factory = sqlite3.Row
    return conn




def seed_data():
    conn = get_db_connection()
    cursor = conn.cursor()

    # إضافة تصنيفات
    categories = [('Electronics',), ('Clothing',), ('Books',)]
    cursor.executemany('INSERT INTO categories (name) VALUES (?)', categories)

    # إضافة منتجات
    products = [
        ('iPhone 14', 'Latest Apple phone', 1000.0, 'iphone.jpg', 1),
        ('T-shirt', 'Cotton t-shirt', 20.0, 'tshirt.jpg', 2),
        ('Python Book', 'Learn Python programming', 30.0, 'python.jpg', 3)
    ]
    cursor.executemany('''
        INSERT INTO products (name, description, price, image, category_id)
        VALUES (?, ?, ?, ?, ?)
    ''', products)

    conn.commit()
    conn.close()


@app.route('/')
def home():
    return jsonify({"message": "E-commerce API is running!"})




@app.route('/api/categories')
def get_categories():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM categories')
    rows = cursor.fetchall()
    conn.close()

    categories = [dict(row) for row in rows]
    return jsonify(categories)


@app.route('/api/categories/<int:category_id>/products')
def get_products_by_category(category_id):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM products WHERE category_id = ?', (category_id,))
    rows = cursor.fetchall()
    conn.close()

    products = [dict(row) for row in rows]
    return jsonify(products)



@app.route('/api/products/<int:product_id>')
def get_product(product_id):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM products WHERE id = ?', (product_id,))
    row = cursor.fetchone()
    conn.close()

    if row:
        return jsonify(dict(row))
    return jsonify({'error': 'Product not found'}), 404

def init_db():
    conn = get_db_connection()
    cursor = conn.cursor()

    cursor.execute('''
        CREATE TABLE IF NOT EXISTS categories (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL
        )
    ''')

    cursor.execute('''
        CREATE TABLE IF NOT EXISTS products (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            description TEXT,
            price REAL,
            image TEXT,
            category_id INTEGER,
            FOREIGN KEY (category_id) REFERENCES categories (id)
        )
    ''')

    conn.commit()
    conn.close()

with app.app_context():
    init_db()
    # seed_data()
    
    
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
