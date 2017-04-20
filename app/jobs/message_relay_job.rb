class MessageRelayJob < ApplicationJob
  queue_as :default

  def perform(message)
    ActionCable
      .server
      .broadcast "messages_for_#{message.room_id}",
        message: ActiveModelSerializers::SerializableResource.new(message)
  end
end
