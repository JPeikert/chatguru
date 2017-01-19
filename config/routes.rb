Rails.application.routes.draw do
  root 'rooms#index'

  get 'react_examples/component', to: 'react_examples#component', as: :component
  resources :rooms, only: %w(index show)
end
