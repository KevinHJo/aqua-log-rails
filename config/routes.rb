Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :create, :update, :destroy]
    resource :session, only: [:create, :destroy]
    resources :tanks, only: [:index, :show, :create, :update, :destroy]
    resources :logs, only: [:index, :create, :update, :destroy]
    resources :posts, only: [:index, :show, :create, :update, :destroy]
    resources :reminders, only: [:index, :create, :update, :destroy]
  end
end
