room_names = %w(Backend Frontend DevOps Offtopic)

room_names.each do |name|
  Room.create(name: name)
end
