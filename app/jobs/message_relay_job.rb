class MessageRelayJob < ApplicationJob
  queue_as :default

  def perform(message)
    ActionCable
      .server
      .broadcast "messages_for_#{message.room_id}", message: {
        id: message.id,
        content: message.content,
        name: message.user.name,
        created_at: message.created_at,
        room_id: message.room_id
      }
  end
end
