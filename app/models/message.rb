class Message < ApplicationRecord
  belongs_to :room
  belongs_to :user

  after_commit { MessageRelayJob.perform_later(self) }
end
