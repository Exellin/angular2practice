Rails.application.routes.draw do
  root 'pages#index'
  resources :media_items, only: [:index, :create, :destroy]
  get "*unmatched_route", to: 'pages#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
