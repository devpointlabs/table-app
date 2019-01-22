Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :events
    resources :users, only: :update
    resources :hero_images
    resources :settings
    resources :r_tickets

    get '/braintree_token', to: 'braintree#token'
    post '/payment', to: 'braintree#payment'
    get '/comingartists', to: 'events#comingartists'
    get '/heroimages', to: 'hero_images#all'
    
    resources :users, only: :update do
      resource :cart
    end
    
  end

  get '*other', to: 'static#index'

end
