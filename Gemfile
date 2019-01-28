source 'https://rubygems.org'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.2.2'
# Use postgresql as the database for Active Record
gem 'pg', '>= 0.18', '< 2.0'
# Use Puma as the app server
gem 'puma', '~> 3.11'
# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', '>= 1.1.0', require: false
# Authentication
gem "devise_token_auth"
# Image Upload
gem 'cloudinary'
# Payments
gem 'braintree'
# Jobs
gem 'whenever', :require => false

group :development, :test do
  # Call 'binding.pry' anywhere in the code to stop execution and get a debugger console
  gem 'pry'
  # Seed Databases
  gem "faker"
  gem 'dotenv-rails'
  gem 'simple_format', '~> 0.0.2'
end

group :development do
  gem 'listen', '>= 3.0.5', '< 3.2'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem "capistrano", "~> 3.11", require: false
  gem "capistrano-rails", "~> 1.4", require: false
  gem "capistrano-rvm", github: "capistrano/rvm"
  gem 'rvm1-capistrano3', :require => false
  gem "capistrano-bundler", '~> 1.1.2'
end
