module.exports = {
  title: process.env.SITE_TITLE || 'Serenity Counseling Center',
  description:
    process.env.SITE_DESCRIPTION ||
    'Professional mental health counseling services for individuals, couples, and families. Compassionate care for anxiety, depression, trauma, and life transitions.',
  url: process.env.SITE_URL || 'http://localhost:3000',
  author: process.env.SITE_AUTHOR || 'Serenity Counseling Center',
  phone: '(555) 123-4567',
  email: 'info@serenitycounseling.com',
  address: '123 Wellness Way, Suite 200, Peaceful City, ST 12345',
  hours: 'Monday - Friday: 8am - 8pm | Saturday: 9am - 5pm',
  environment: process.env.NODE_ENV || 'development',
};
