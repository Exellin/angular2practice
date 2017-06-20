Rails.application.routes.draw do
  root 'pages#index'
  resources :media_items, only: [:index]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
