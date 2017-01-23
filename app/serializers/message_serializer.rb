class MessageSerializer < ActiveModel::Serializer
  attributes :id, :content, :created_at, :room_id, :user

  belongs_to :user
end
