1.times do
  User.create(
    email: "admin@admin.com",
    password: "password",
    password_confirmation: "password",
    admin: true
  )

  User.create(
    email: "test@test.com",
    password: "password",
    password_confirmation: "password",
    admin: false
  )

  Event.create(
    host: "Audien",
    image_url: "https://res.cloudinary.com/dpvjbff4h/image/upload/v1547590891/Audien.jpg",
    event_date: "2019-01-15 00:00:00",
    dress_code: "Clothing optional",
    description: "This is a dude who makes music in his mom's basement while high and eating capt crunch. Drop E and enjoy.Hailing from New York City, and having only been in the scene for less than two years. InsertNameHere has quickly gained attention and support from some of the bigger artists in the underground industry with his unique powerful growl baselines, and heart melting sub-bass. Be on the lookout for this guy stopping in SLC on InsertDateHere!",
    event_time: "2019-01-14 21:30:00"
  )

  Event.create(
    host: "Cesqeaux",
    image_url: "https://res.cloudinary.com/dpvjbff4h/image/upload/v1547590892/Cesqeaux.jpg",
    event_date: "2019-01-18 00:00:00",
    dress_code: "Clothing optional",
    description: "This is a dude who makes music in his mom's basement while high and eating capt crunch. Drop E and enjoy.Hailing from New York City, and having only been in the scene for less than two years. InsertNameHere has quickly gained attention and support from some of the bigger artists in the underground industry with his unique powerful growl baselines, and heart melting sub-bass. Be on the lookout for this guy stopping in SLC on InsertDateHere!",
    event_time: "2019-01-14 21:30:00"
  )

  Event.create(
    host: "DirtyDave",
    image_url: "https://res.cloudinary.com/dpvjbff4h/image/upload/v1547590891/DirtyDave.jpg",
    event_date: "2019-01-24 00:00:00",
    dress_code: "Clothing optional",
    description: "This is a dude who makes music in his mom's basement while high and eating capt crunch. Drop E and enjoy.Hailing from New York City, and having only been in the scene for less than two years. InsertNameHere has quickly gained attention and support from some of the bigger artists in the underground industry with his unique powerful growl baselines, and heart melting sub-bass. Be on the lookout for this guy stopping in SLC on InsertDateHere!",
    event_time: "2019-01-14 21:30:00"
  )

  Event.create(
    host: "DJ_Que",
    image_url: "https://res.cloudinary.com/dpvjbff4h/image/upload/v1547590891/DJ_Que.jpg",
    event_date: "2019-01-27 00:00:00",
    dress_code: "Clothing optional",
    description: "This is a dude who makes music in his mom's basement while high and eating capt crunch. Drop E and enjoy.Hailing from New York City, and having only been in the scene for less than two years. InsertNameHere has quickly gained attention and support from some of the bigger artists in the underground industry with his unique powerful growl baselines, and heart melting sub-bass. Be on the lookout for this guy stopping in SLC on InsertDateHere!",
    event_time: "2019-01-14 21:30:00"
  )

  Event.create(
    host: "DJ_Jazzy",
    image_url: "https://res.cloudinary.com/dpvjbff4h/image/upload/v1547590891/DJ_Jazzy_Jeff.jpg",
    event_date: "2019-02-01 00:00:00",
    dress_code: "Clothing optional",
    description: "This is a dude who makes music in his mom's basement while high and eating capt crunch. Drop E and enjoy.Hailing from New York City, and having only been in the scene for less than two years. InsertNameHere has quickly gained attention and support from some of the bigger artists in the underground industry with his unique powerful growl baselines, and heart melting sub-bass. Be on the lookout for this guy stopping in SLC on InsertDateHere!",
    event_time: "2019-01-14 21:30:00"
  )
    
  Event.create(
    host: "Fashen",
    image_url: "https://res.cloudinary.com/dpvjbff4h/image/upload/v1547590891/Fashen.jpg",
    event_date: "2019-02-04 00:00:00",
    dress_code: "Clothing optional",
    description: "This is a dude who makes music in his mom's basement while high and eating capt crunch. Drop E and enjoy.Hailing from New York City, and having only been in the scene for less than two years. InsertNameHere has quickly gained attention and support from some of the bigger artists in the underground industry with his unique powerful growl baselines, and heart melting sub-bass. Be on the lookout for this guy stopping in SLC on InsertDateHere!",
    event_time: "2019-01-14 21:30:00"
  )

  Event.create(
    host: "Jason_Ross",
    image_url: "https://res.cloudinary.com/dpvjbff4h/image/upload/v1547590891/Jason_Ross.jpg",
    event_date: "2019-02-15 00:00:00",
    dress_code: "Clothing optional",
    description: "This is a dude who makes music in his mom's basement while high and eating capt crunch. Drop E and enjoy.Hailing from New York City, and having only been in the scene for less than two years. InsertNameHere has quickly gained attention and support from some of the bigger artists in the underground industry with his unique powerful growl baselines, and heart melting sub-bass. Be on the lookout for this guy stopping in SLC on InsertDateHere!",
    event_time: "2019-01-14 21:30:00"
  )

  Event.create(
    host: "Jaycee",
    image_url: "https://res.cloudinary.com/dpvjbff4h/image/upload/v1547590892/Jaycee.jpg",
    event_date: "2019-02-25 00:00:00",
    dress_code: "Clothing optional",
    description: "This is a dude who makes music in his mom's basement while high and eating capt crunch. Drop E and enjoy.Hailing from New York City, and having only been in the scene for less than two years. InsertNameHere has quickly gained attention and support from some of the bigger artists in the underground industry with his unique powerful growl baselines, and heart melting sub-bass. Be on the lookout for this guy stopping in SLC on InsertDateHere!",
    event_time: "2019-01-14 21:30:00"
  )

  Event.create(
    host: "Kid_Conrad",
    image_url: "https://res.cloudinary.com/dpvjbff4h/image/upload/v1547590891/Kid_Conrad.jpg",
    event_date: "2019-03-07 00:00:00",
    dress_code: "Clothing optional",
    description: "This is a dude who makes music in his mom's basement while high and eating capt crunch. Drop E and enjoy.Hailing from New York City, and having only been in the scene for less than two years. InsertNameHere has quickly gained attention and support from some of the bigger artists in the underground industry with his unique powerful growl baselines, and heart melting sub-bass. Be on the lookout for this guy stopping in SLC on InsertDateHere!",
    event_time: "2019-01-14 21:30:00"
  )

  Event.create(
    host: "Method_Man",
    image_url: "https://res.cloudinary.com/dpvjbff4h/image/upload/v1547590891/Method_Man_Redman.jpg",
    event_date: "2019-03-17 00:00:00",
    dress_code: "Clothing optional",
    description: "This is a dude who makes music in his mom's basement while high and eating capt crunch. Drop E and enjoy.Hailing from New York City, and having only been in the scene for less than two years. InsertNameHere has quickly gained attention and support from some of the bigger artists in the underground industry with his unique powerful growl baselines, and heart melting sub-bass. Be on the lookout for this guy stopping in SLC on InsertDateHere!",
    event_time: "2019-01-14 21:30:00"
  )

  Event.create(
    host: "Spencer",
    image_url: "https://res.cloudinary.com/dpvjbff4h/image/upload/v1547590891/Spencer_Brown.jpg",
    event_date: "2019-03-22 00:00:00",
    dress_code: "Clothing optional",
    description: "This is a dude who makes music in his mom's basement while high and eating capt crunch. Drop E and enjoy.Hailing from New York City, and having only been in the scene for less than two years. InsertNameHere has quickly gained attention and support from some of the bigger artists in the underground industry with his unique powerful growl baselines, and heart melting sub-bass. Be on the lookout for this guy stopping in SLC on InsertDateHere!",
    event_time: "2019-01-14 21:30:00"
  )

  Event.create(
    host: "Subtronics",
    image_url: "https://res.cloudinary.com/dpvjbff4h/image/upload/v1547590892/Subtronics.jpg",
    event_date: "2019-03-27 00:00:00",
    dress_code: "Clothing optional",
    description: "This is a dude who makes music in his mom's basement while high and eating capt crunch. Drop E and enjoy.Hailing from New York City, and having only been in the scene for less than two years. InsertNameHere has quickly gained attention and support from some of the bigger artists in the underground industry with his unique powerful growl baselines, and heart melting sub-bass. Be on the lookout for this guy stopping in SLC on InsertDateHere!",
    event_time: "2019-01-14 21:30:00"
  )

  Event.create(
    host: "Tritonal",
    image_url: "https://res.cloudinary.com/dpvjbff4h/image/upload/v1547590892/Tritonal.jpg",
    event_date: "2019-04-01 00:00:00",
    dress_code: "Clothing optional",
    description: "This is a dude who makes music in his mom's basement while high and eating capt crunch. Drop E and enjoy.Hailing from New York City, and having only been in the scene for less than two years. InsertNameHere has quickly gained attention and support from some of the bigger artists in the underground industry with his unique powerful growl baselines, and heart melting sub-bass. Be on the lookout for this guy stopping in SLC on InsertDateHere!",
    event_time: "2019-01-14 21:30:00"
  )

  Event.create(
    host: "Valentino",
    image_url: "https://res.cloudinary.com/dpvjbff4h/image/upload/v1547590892/Tritonal.jpg",
    event_date: "2019-04-10 00:00:00",
    dress_code: "Clothing optional",
    description: "This is a dude who makes music in his mom's basement while high and eating capt crunch. Drop E and enjoy.Hailing from New York City, and having only been in the scene for less than two years. InsertNameHere has quickly gained attention and support from some of the bigger artists in the underground industry with his unique powerful growl baselines, and heart melting sub-bass. Be on the lookout for this guy stopping in SLC on InsertDateHere!",
    event_time: "2019-01-14 21:30:00"
  )
end

puts "Event Data Seeded, ADMIN ACCOUNT: admin@admin.com PASSWORD: password, USER ACCOUNT: test@test.com PASSWORD: password"