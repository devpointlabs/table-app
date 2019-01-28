Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :events
    resources :hero_images
    resources :settings
    resources :r_tickets
    resources :rsvps, only: :create

    get '/braintree_token', to: 'braintree#token'
    post '/payment', to: 'braintree#payment'
    get '/comingartists', to: 'events#comingartists'
    get '/heroimages', to: 'hero_images#all'
    delete '/expired', to: 'events#expired' 
    put '/promote_to_admin', to: 'users#promote_to_admin'
    put '/remove_as_admin', to: 'users#remove_as_admin'
    get '/view_all_admins', to: 'users#view_all_admins'
    delete '/clear_cart', to: 'carts#clear_cart'
    
    resources :users, only: :update do
      resource :cart
      resources :my_tickets
    end
  end
  get '*other', to: 'static#index'
end
