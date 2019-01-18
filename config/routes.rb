Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    get '/braintree_token', to: 'braintree#token'
    post '/payment', to: 'braintree#payment'
    get '/comingartists', to: 'events#comingartists'
    resources :events
    resources :users, only: :update do
      resource :cart
    end
    resources :carts do
      resources :r_tickets
    end
  end

end
