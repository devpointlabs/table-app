Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :events
    get '/comingartists', to: 'events#comingartists'
  end
  namespace :api do
    resources :users, only: :update
  end

end
