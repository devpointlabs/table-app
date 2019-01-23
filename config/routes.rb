Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :events
    get '/comingartists', to: 'events#comingartists'
    resources :users, only: :update
    put '/promote_to_admin', to: 'users#promote_to_admin'
    put '/remove_as_admin', to: 'users#remove_as_admin'
    get '/view_all_admins', to: 'users#view_all_admins'
  end
end
