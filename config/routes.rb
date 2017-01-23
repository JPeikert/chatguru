Rails.application.routes.draw do
  devise_for :users, controllers: { registrations: 'registrations' }
  root 'chatroom#show'
  get 'react_examples/component', to: 'react_examples#component', as: :component
  resources :rooms, only: %w(index show)
  resources :messages, only: %w(index create)

  get '/chat', to: 'chatroom#show'

  mount ActionCable.server => '/cable'
end
