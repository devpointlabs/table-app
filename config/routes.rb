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
    put '/promote_to_admin', to: 'users#promote_to_admin'
    put '/remove_as_admin', to: 'users#remove_as_admin'
    get '/view_all_admins', to: 'users#view_all_admins'
    
    resources :users, only: :update do
      resource :cart
    end
  end
  get '*other', to: 'static#index'
end
