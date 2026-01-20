INSERT INTO users (email, password, name, role, is_active, created_at, updated_at)
VALUES ('admin@shop.com', '{bcrypt}$2a$10$7EqJtq98hPqEX7fNZaFWoOhi5R5p4E2sQ1hYJq6n6JQH7a9wN5m', 'Admin User', 'ADMIN', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO users (email, password, name, role, approval_status, is_active, created_at, updated_at)
VALUES ('seller@shop.com', '{bcrypt}$2a$10$7EqJtq98hPqEX7fNZaFWoOhi5R5p4E2sQ1hYJq6n6JQH7a9wN5m', 'Seller One', 'SELLER', 'APPROVED', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO users (email, password, name, role, is_active, created_at, updated_at)
VALUES ('customer@shop.com', '{bcrypt}$2a$10$7EqJtq98hPqEX7fNZaFWoOhi5R5p4E2sQ1hYJq6n6JQH7a9wN5m', 'John Doe', 'CUSTOMER', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO users (email, password, name, role, is_active, created_at, updated_at)
VALUES ('premium@shop.com', '{bcrypt}$2a$10$7EqJtq98hPqEX7fNZaFWoOhi5R5p4E2sQ1hYJq6n6JQH7a9wN5m', 'Jane Smith', 'CUSTOMER', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO premium_subscriptions (user_id, plan_type, start_date, end_date, is_active, auto_renew)
VALUES (4, 'YEARLY', CURRENT_TIMESTAMP, DATEADD('YEAR', 1, CURRENT_TIMESTAMP), true, false);

INSERT INTO categories (name, description, created_at) VALUES
('Electronics', 'Electronic items and gadgets', CURRENT_TIMESTAMP),
('Fashion', 'Clothing and accessories', CURRENT_TIMESTAMP),
('Home & Kitchen', 'Home appliances and kitchen items', CURRENT_TIMESTAMP),
('Sports', 'Sports equipment and fitness', CURRENT_TIMESTAMP);

INSERT INTO categories (name, parent_id, description, created_at) VALUES
('Mobile Phones', 1, 'Smartphones and feature phones', CURRENT_TIMESTAMP),
('Laptops', 1, 'Laptops and notebooks', CURRENT_TIMESTAMP),
('Mens Fashion', 2, 'Clothing for men', CURRENT_TIMESTAMP),
('Womens Fashion', 2, 'Clothing for women', CURRENT_TIMESTAMP);

INSERT INTO products (seller_id, category_id, name, description, price, stock_quantity, image_url, average_rating, created_at, updated_at)
VALUES
(2, 5, 'iPhone 15 Pro', 'Latest Apple smartphone', 99999, 50, 'iphone15.jpg', 4.5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(2, 6, 'MacBook Pro', 'Apple laptop with M3 chip', 199999, 30, 'macbook.jpg', 4.8, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(2, 7, 'Nike T-Shirt', 'Cotton t-shirt for men', 1299, 100, 'tshirt.jpg', 4.2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(2, 4, 'Yoga Mat', 'Anti-slip yoga mat', 799, 200, 'yogamat.jpg', 4.0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
