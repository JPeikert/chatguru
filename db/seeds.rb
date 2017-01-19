Room.destroy_all

%w(Backend Frontend DevOps Design General).each do |name|
  Room.create(name: name)
end

[
  { author: 'Ben', content: 'Hey, i have a problem with some code, could anyone help me?' },
  { author: 'Suzie', content: "Sure, let's jump on Screenhero" },
  { author: 'Ben', content: 'Thanks Suzie, without you it would take me so long.' },
  { author: 'Suzie', content: "You're welcome :)" }
].each do |msg|
  Message.create({ room: Room.find_by(name: "Backend") }.merge(msg))
end
