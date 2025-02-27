-- Create services table
CREATE TABLE IF NOT EXISTS services (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  icon_name VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id SERIAL PRIMARY KEY,
  client_name VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  message TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'new',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create content table for dynamic website content
CREATE TABLE IF NOT EXISTS content (
  id SERIAL PRIMARY KEY,
  section VARCHAR(100) NOT NULL,
  title VARCHAR(255),
  content TEXT,
  meta JSON,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert some initial content
INSERT INTO content (section, title, content) VALUES
('hero', 'Welcome to Miller Lights', 'Your trusted electrical service provider'),
('about', 'About Miller Lights', 'Professional electrical services with a commitment to quality and safety'),
('contact', 'Contact Us', 'Get in touch with us for all your electrical needs');

-- Create function to update timestamp
CREATE OR REPLACE FUNCTION update_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = CURRENT_TIMESTAMP;
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_services_timestamp
  BEFORE UPDATE ON services
  FOR EACH ROW
  EXECUTE FUNCTION update_timestamp();

CREATE TRIGGER update_content_timestamp
  BEFORE UPDATE ON content
  FOR EACH ROW
  EXECUTE FUNCTION update_timestamp(); 