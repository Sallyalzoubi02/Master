CREATE TABLE Users (
    id INT IDENTITY(1,1) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    user_type VARCHAR(50) CHECK (user_type IN ('individual', 'company')) NOT NULL,
    birth_date DATE NULL,
    gender VARCHAR(50) CHECK (gender IN ('male', 'female', 'other')) NULL,
    company_name VARCHAR(255) NULL,
    company_location TEXT NULL,
    points INT DEFAULT 0,
    created_at DATETIME DEFAULT GETDATE()
);

CREATE TABLE RecyclingRequests (
    id INT IDENTITY(1,1) PRIMARY KEY,
    user_id INT,
    material_name VARCHAR(255) NOT NULL,
    material_type VARCHAR(255) NOT NULL,
    quantity VARCHAR(50) CHECK (quantity IN ('small', 'medium', 'large', 'unknown')) NOT NULL,
    image_url VARCHAR(255),
    notes TEXT,
    created_at DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE
);

CREATE TABLE Deliveries (
    id INT IDENTITY(1,1) PRIMARY KEY,
    request_id INT,
    receiver_name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    location TEXT NOT NULL,
    delivery_time DATETIME NOT NULL,
    paid_delivery BIT DEFAULT 0,
    FOREIGN KEY (request_id) REFERENCES RecyclingRequests(id) ON DELETE CASCADE
);

CREATE TABLE Subscriptions (
    id INT IDENTITY(1,1) PRIMARY KEY,
    user_id INT,
    subscription_type VARCHAR(50) CHECK (subscription_type IN ('daily', 'weekly', 'monthly')) NOT NULL,
    day_of_week VARCHAR(20) CHECK (day_of_week IN ('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday')) NULL,
    time TIME NOT NULL,
    location TEXT NOT NULL,
    notes TEXT,
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE
);

CREATE TABLE Products (
    id INT IDENTITY(1,1) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    stock INT NOT NULL DEFAULT 0,
    company_name VARCHAR(255),
    image_url VARCHAR(255),
    created_at DATETIME DEFAULT GETDATE()
);

CREATE TABLE Cart (
    id INT IDENTITY(1,1) PRIMARY KEY,
    user_id INT,
    product_id INT,
    quantity INT NOT NULL DEFAULT 1,
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES Products(id) ON DELETE CASCADE
);

CREATE TABLE Payments (
    id INT IDENTITY(1,1) PRIMARY KEY,
    user_id INT,
    amount DECIMAL(10,2) NOT NULL,
    payment_method VARCHAR(50) CHECK (payment_method IN ('Visa', 'MasterCard', 'Cash on Delivery')) NOT NULL,
    status VARCHAR(50) CHECK (status IN ('Pending', 'Completed', 'Failed')) DEFAULT 'Pending',
    created_at DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE
);

CREATE TABLE Orders (
    id INT IDENTITY(1,1) PRIMARY KEY,
    user_id INT,
    payment_id INT,
    order_status VARCHAR(50) CHECK (order_status IN ('Pending', 'Shipped', 'Delivered', 'Cancelled')) DEFAULT 'Pending',
    delivery_address TEXT NOT NULL,
    delivery_time DATETIME NOT NULL,
    total_amount DECIMAL(10,2) NOT NULL,
    created_at DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE,
    FOREIGN KEY (payment_id) REFERENCES Payments(id) ON DELETE CASCADE
);

CREATE TABLE OrderItems (
    id INT IDENTITY(1,1) PRIMARY KEY,
    order_id INT,
    product_id INT,
    quantity INT NOT NULL DEFAULT 1,
    price DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES Orders(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES Products(id) ON DELETE CASCADE
);
