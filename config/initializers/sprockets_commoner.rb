Rails.application.config.assets.configure do |env|
  Sprockets::Commoner::Processor.configure(
    env,
    include: ['app/assets/javascript'],
    exclude: ['vendor/bundle'],
    babel_exclude: [/node_modules/]
  )
end
