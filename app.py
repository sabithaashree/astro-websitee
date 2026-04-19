from flask import Flask, render_template, request, redirect, url_for
import sqlite3

from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user

app = Flask(__name__)
app.secret_key = "secret123"

# ---------------- LOGIN SETUP ----------------
login_manager = LoginManager()
login_manager.init_app(app)

class User(UserMixin):
    def __init__(self, id):
        self.id = id

@login_manager.user_loader
def load_user(user_id):
    return User(user_id)

# ---------------- DATABASE ----------------
def init_db():
    conn = sqlite3.connect('db.sqlite3')
    c = conn.cursor()
    c.execute('''
        CREATE TABLE IF NOT EXISTS bookings(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT,
        phone TEXT,
        date TEXT,
        session TEXT,
        time TEXT
        )
    ''')
    conn.commit()
    conn.close()

init_db()

# ---------------- ROUTES ----------------

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/book', methods=['POST'])
def book():
    data = request.form

    conn = sqlite3.connect('db.sqlite3')
    c = conn.cursor()
    c.execute("INSERT INTO bookings(name,email,phone,date,session,time) VALUES(?,?,?,?,?,?)",
              (data['name'], data['email'], data['phone'],
               data['visit_date'], data['session_type'], data['time']))
    conn.commit()
    conn.close()

    return "Booking Confirmed"

# ---------------- ADMIN LOGIN ----------------

@app.route('/login', methods=['GET','POST'])
def login():
    if request.method == 'POST':
        if request.form['username'] == "admin" and request.form['password'] == "1234":
            user = User(1)
            login_user(user)
            return redirect('/admin')
    return render_template('login.html')

@app.route('/admin')
@login_required
def admin():
    conn = sqlite3.connect('db.sqlite3')
    c = conn.cursor()
    c.execute("SELECT * FROM bookings")
    bookings = c.fetchall()
    conn.close()

    return render_template('admin.html', bookings=bookings)

@app.route('/delete/<int:id>')
@login_required
def delete(id):
    conn = sqlite3.connect('db.sqlite3')
    c = conn.cursor()
    c.execute("DELETE FROM bookings WHERE id=?", (id,))
    conn.commit()
    conn.close()
    return redirect('/admin')

@app.route('/logout')
def logout():
    logout_user()
    return redirect('/login')

if __name__ == "__main__":
    import os
    port = int(os.environ.get("PORT", 10000))
    app.run(host="0.0.0.0", port=port)
    

