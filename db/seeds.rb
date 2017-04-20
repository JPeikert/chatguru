Room.destroy_all

%w(Backend Frontend DevOps Design General).each do |name|
  Room.create(name: name)
end

user_1 = User.create(name: 'Ben', email: 'ben@test.pl', password: 'qweqwe123123')

user_2 = User.create(name: 'Suzie', email: 'suzie@test.pl', password: 'qweqwe1231232')

[
  { user: user_1, content: 'Hey, i have a problem with some code, could anyone help me?' },
  { user: user_2, content: "Sure, let's jump on Screenhero" },
  { user: user_1, content: 'Thanks Suzie, without you it would take me so long.' },
  { user: user_2, content: "You're welcome :)" }
].each do |msg|
  Message.create({ room: Room.find_by(name: "Backend") }.merge(msg))
end
