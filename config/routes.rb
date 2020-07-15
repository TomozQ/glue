Rails.application.routes.draw do
  devise_for :users
  root "groups#index"
  resources :users, only: [:edit, :update]
  resources :groups, only: [:index, :new, :create, :edit, :update, :show] do
    resources :messages, only: [:index, :create]
    resources :stores, only: [:index, :new, :create, :show] do
      resources :informs, only: [:index, :create]
    end
  end
  
end
