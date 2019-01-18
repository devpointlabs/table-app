1.times do
  User.create(
    first_name: "Admin",
    last_name: "Smith",
    email: "admin@admin.com",
    password: "password",
    password_confirmation: "password",
    admin: true
  )

  User.create(
    first_name: "Johnny",
    last_name: "Test",
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
    description: "Hailing from New York City, and having only been in the scene for less than two years. InsertNameHere has quickly gained attention and support from some of the bigger artists in the underground industry with his unique powerful growl baselines, and heart melting sub-bass. Be on the lookout for this guy stopping in SLC on InsertDateHere!",
    event_time: "2019-01-14 21:30:00"
  )

  Event.create(
    host: "Cesqeaux",
    image_url: "https://res.cloudinary.com/dpvjbff4h/image/upload/v1547590892/Cesqeaux.jpg",
    event_date: "2019-01-18 00:00:00",
    dress_code: "Clothing optional",
    description: "Hailing from New York City, and having only been in the scene for less than two years. InsertNameHere has quickly gained attention and support from some of the bigger artists in the underground industry with his unique powerful growl baselines, and heart melting sub-bass. Be on the lookout for this guy stopping in SLC on InsertDateHere!",
    event_time: "2019-01-14 21:30:00"
  )

  Event.create(
    host: "DirtyDave",
    image_url: "https://res.cloudinary.com/dpvjbff4h/image/upload/v1547590891/DirtyDave.jpg",
    event_date: "2019-01-24 00:00:00",
    dress_code: "Clothing optional",
    description: "Hailing from New York City, and having only been in the scene for less than two years. InsertNameHere has quickly gained attention and support from some of the bigger artists in the underground industry with his unique powerful growl baselines, and heart melting sub-bass. Be on the lookout for this guy stopping in SLC on InsertDateHere!",
    event_time: "2019-01-14 21:30:00"
  )

  Event.create(
    host: "DJ_Que",
    image_url: "https://res.cloudinary.com/dpvjbff4h/image/upload/v1547590891/DJ_Que.jpg",
    event_date: "2019-01-27 00:00:00",
    dress_code: "Clothing optional",
    description: "Hailing from New York City, and having only been in the scene for less than two years. InsertNameHere has quickly gained attention and support from some of the bigger artists in the underground industry with his unique powerful growl baselines, and heart melting sub-bass. Be on the lookout for this guy stopping in SLC on InsertDateHere!",
    event_time: "2019-01-14 21:30:00"
  )

  Event.create(
    host: "DJ_Jazzy",
    image_url: "https://res.cloudinary.com/dpvjbff4h/image/upload/v1547590891/DJ_Jazzy_Jeff.jpg",
    event_date: "2019-02-01 00:00:00",
    dress_code: "Clothing optional",
    description: "Hailing from New York City, and having only been in the scene for less than two years. InsertNameHere has quickly gained attention and support from some of the bigger artists in the underground industry with his unique powerful growl baselines, and heart melting sub-bass. Be on the lookout for this guy stopping in SLC on InsertDateHere!",
    event_time: "2019-01-14 21:30:00"
  )
    
  Event.create(
    host: "Fashen",
    image_url: "https://res.cloudinary.com/dpvjbff4h/image/upload/v1547590891/Fashen.jpg",
    event_date: "2019-02-04 00:00:00",
    dress_code: "Clothing optional",
    description: "Hailing from New York City, and having only been in the scene for less than two years. InsertNameHere has quickly gained attention and support from some of the bigger artists in the underground industry with his unique powerful growl baselines, and heart melting sub-bass. Be on the lookout for this guy stopping in SLC on InsertDateHere!",
    event_time: "2019-01-14 21:30:00"
  )

  Event.create(
    host: "Jason_Ross",
    image_url: "https://res.cloudinary.com/dpvjbff4h/image/upload/v1547590891/Jason_Ross.jpg",
    event_date: "2019-02-15 00:00:00",
    dress_code: "Clothing optional",
    description: "Hailing from New York City, and having only been in the scene for less than two years. InsertNameHere has quickly gained attention and support from some of the bigger artists in the underground industry with his unique powerful growl baselines, and heart melting sub-bass. Be on the lookout for this guy stopping in SLC on InsertDateHere!",
    event_time: "2019-01-14 21:30:00"
  )

  Event.create(
    host: "Jaycee",
    image_url: "https://res.cloudinary.com/dpvjbff4h/image/upload/v1547590892/Jaycee.jpg",
    event_date: "2019-02-25 00:00:00",
    dress_code: "Clothing optional",
    description: "Hailing from New York City, and having only been in the scene for less than two years. InsertNameHere has quickly gained attention and support from some of the bigger artists in the underground industry with his unique powerful growl baselines, and heart melting sub-bass. Be on the lookout for this guy stopping in SLC on InsertDateHere!",
    event_time: "2019-01-14 21:30:00"
  )

  Event.create(
    host: "Kid_Conrad",
    image_url: "https://res.cloudinary.com/dpvjbff4h/image/upload/v1547590891/Kid_Conrad.jpg",
    event_date: "2019-03-07 00:00:00",
    dress_code: "Clothing optional",
    description: "Hailing from New York City, and having only been in the scene for less than two years. InsertNameHere has quickly gained attention and support from some of the bigger artists in the underground industry with his unique powerful growl baselines, and heart melting sub-bass. Be on the lookout for this guy stopping in SLC on InsertDateHere!",
    event_time: "2019-01-14 21:30:00"
  )

  Event.create(
    host: "Method_Man",
    image_url: "https://res.cloudinary.com/dpvjbff4h/image/upload/v1547590891/Method_Man_Redman.jpg",
    event_date: "2019-03-17 00:00:00",
    dress_code: "Clothing optional",
    description: "Hailing from New York City, and having only been in the scene for less than two years. InsertNameHere has quickly gained attention and support from some of the bigger artists in the underground industry with his unique powerful growl baselines, and heart melting sub-bass. Be on the lookout for this guy stopping in SLC on InsertDateHere!",
    event_time: "2019-01-14 21:30:00"
  )

  Event.create(
    host: "Spencer",
    image_url: "https://res.cloudinary.com/dpvjbff4h/image/upload/v1547590891/Spencer_Brown.jpg",
    event_date: "2019-03-22 00:00:00",
    dress_code: "Clothing optional",
    description: "Hailing from New York City, and having only been in the scene for less than two years. InsertNameHere has quickly gained attention and support from some of the bigger artists in the underground industry with his unique powerful growl baselines, and heart melting sub-bass. Be on the lookout for this guy stopping in SLC on InsertDateHere!",
    event_time: "2019-01-14 21:30:00"
  )

  Event.create(
    host: "Subtronics",
    image_url: "https://res.cloudinary.com/dpvjbff4h/image/upload/v1547590892/Subtronics.jpg",
    event_date: "2019-03-27 00:00:00",
    dress_code: "Clothing optional",
    description: "Hailing from New York City, and having only been in the scene for less than two years. InsertNameHere has quickly gained attention and support from some of the bigger artists in the underground industry with his unique powerful growl baselines, and heart melting sub-bass. Be on the lookout for this guy stopping in SLC on InsertDateHere!",
    event_time: "2019-01-14 21:30:00"
  )

  Event.create(
    host: "Tritonal",
    image_url: "https://res.cloudinary.com/dpvjbff4h/image/upload/v1547590892/Tritonal.jpg",
    event_date: "2019-04-01 00:00:00",
    dress_code: "Clothing optional",
    description: "Hailing from New York City, and having only been in the scene for less than two years. InsertNameHere has quickly gained attention and support from some of the bigger artists in the underground industry with his unique powerful growl baselines, and heart melting sub-bass. Be on the lookout for this guy stopping in SLC on InsertDateHere!",
    event_time: "2019-01-14 21:30:00"
  )
  
  Event.create(
    host: "Audien",
    image_url: "https://res.cloudinary.com/dpvjbff4h/image/upload/v1547590891/Audien.jpg",
    event_date: "2019-04-03 00:00:00",
    dress_code: "Clothing optional",
    description: "Hailing from New York City, and having only been in the scene for less than two years. InsertNameHere has quickly gained attention and support from some of the bigger artists in the underground industry with his unique powerful growl baselines, and heart melting sub-bass. Be on the lookout for this guy stopping in SLC on InsertDateHere!",
    event_time: "2019-01-14 21:30:00"
  )

  Event.create(
    host: "Cesqeaux",
    image_url: "https://res.cloudinary.com/dpvjbff4h/image/upload/v1547590892/Cesqeaux.jpg",
    event_date: "2019-04-10 00:00:00",
    dress_code: "Clothing optional",
    description: "Hailing from New York City, and having only been in the scene for less than two years. InsertNameHere has quickly gained attention and support from some of the bigger artists in the underground industry with his unique powerful growl baselines, and heart melting sub-bass. Be on the lookout for this guy stopping in SLC on InsertDateHere!",
    event_time: "2019-01-14 21:30:00"
  )

  Event.create(
    host: "DirtyDave",
    image_url: "https://res.cloudinary.com/dpvjbff4h/image/upload/v1547590891/DirtyDave.jpg",
    event_date: "2019-04-23 00:00:00",
    dress_code: "Clothing optional",
    description: "Hailing from New York City, and having only been in the scene for less than two years. InsertNameHere has quickly gained attention and support from some of the bigger artists in the underground industry with his unique powerful growl baselines, and heart melting sub-bass. Be on the lookout for this guy stopping in SLC on InsertDateHere!",
    event_time: "2019-01-14 21:30:00"
  )

  Event.create(
    host: "DJ_Que",
    image_url: "https://res.cloudinary.com/dpvjbff4h/image/upload/v1547590891/DJ_Que.jpg",
    event_date: "2019-05-15 00:00:00",
    dress_code: "Clothing optional",
    description: "Hailing from New York City, and having only been in the scene for less than two years. InsertNameHere has quickly gained attention and support from some of the bigger artists in the underground industry with his unique powerful growl baselines, and heart melting sub-bass. Be on the lookout for this guy stopping in SLC on InsertDateHere!",
    event_time: "2019-01-14 21:30:00"
  )

  Event.create(
    host: "DJ_Jazzy",
    image_url: "https://res.cloudinary.com/dpvjbff4h/image/upload/v1547590891/DJ_Jazzy_Jeff.jpg",
    event_date: "2019-05-25 00:00:00",
    dress_code: "Clothing optional",
    description: "Hailing from New York City, and having only been in the scene for less than two years. InsertNameHere has quickly gained attention and support from some of the bigger artists in the underground industry with his unique powerful growl baselines, and heart melting sub-bass. Be on the lookout for this guy stopping in SLC on InsertDateHere!",
    event_time: "2019-01-14 21:30:00"
  )
    
  Event.create(
    host: "Fashen",
    image_url: "https://res.cloudinary.com/dpvjbff4h/image/upload/v1547590891/Fashen.jpg",
    event_date: "2019-05-26 00:00:00",
    dress_code: "Clothing optional",
    description: "Hailing from New York City, and having only been in the scene for less than two years. InsertNameHere has quickly gained attention and support from some of the bigger artists in the underground industry with his unique powerful growl baselines, and heart melting sub-bass. Be on the lookout for this guy stopping in SLC on InsertDateHere!",
    event_time: "2019-01-14 21:30:00"
  )

  Event.create(
    host: "Jason_Ross",
    image_url: "https://res.cloudinary.com/dpvjbff4h/image/upload/v1547590891/Jason_Ross.jpg",
    event_date: "2019-05-27 00:00:00",
    dress_code: "Clothing optional",
    description: "Hailing from New York City, and having only been in the scene for less than two years. InsertNameHere has quickly gained attention and support from some of the bigger artists in the underground industry with his unique powerful growl baselines, and heart melting sub-bass. Be on the lookout for this guy stopping in SLC on InsertDateHere!",
    event_time: "2019-01-14 21:30:00"
  )

  Event.create(
    host: "Jaycee",
    image_url: "https://res.cloudinary.com/dpvjbff4h/image/upload/v1547590892/Jaycee.jpg",
    event_date: "2019-06-04 00:00:00",
    dress_code: "Clothing optional",
    description: "Hailing from New York City, and having only been in the scene for less than two years. InsertNameHere has quickly gained attention and support from some of the bigger artists in the underground industry with his unique powerful growl baselines, and heart melting sub-bass. Be on the lookout for this guy stopping in SLC on InsertDateHere!",
    event_time: "2019-01-14 21:30:00"
  )

  Event.create(
    host: "Kid_Conrad",
    image_url: "https://res.cloudinary.com/dpvjbff4h/image/upload/v1547590891/Kid_Conrad.jpg",
    event_date: "2019-06-05 00:00:00",
    dress_code: "Clothing optional",
    description: "Hailing from New York City, and having only been in the scene for less than two years. InsertNameHere has quickly gained attention and support from some of the bigger artists in the underground industry with his unique powerful growl baselines, and heart melting sub-bass. Be on the lookout for this guy stopping in SLC on InsertDateHere!",
    event_time: "2019-01-14 21:30:00"
  )

  Event.create(
    host: "Method_Man",
    image_url: "https://res.cloudinary.com/dpvjbff4h/image/upload/v1547590891/Method_Man_Redman.jpg",
    event_date: "2019-06-14 00:00:00",
    dress_code: "Clothing optional",
    description: "Hailing from New York City, and having only been in the scene for less than two years. InsertNameHere has quickly gained attention and support from some of the bigger artists in the underground industry with his unique powerful growl baselines, and heart melting sub-bass. Be on the lookout for this guy stopping in SLC on InsertDateHere!",
    event_time: "2019-01-14 21:30:00"
  )

  Event.create(
    host: "Spencer",
    image_url: "https://res.cloudinary.com/dpvjbff4h/image/upload/v1547590891/Spencer_Brown.jpg",
    event_date: "2019-06-15 00:00:00",
    dress_code: "Clothing optional",
    description: "Hailing from New York City, and having only been in the scene for less than two years. InsertNameHere has quickly gained attention and support from some of the bigger artists in the underground industry with his unique powerful growl baselines, and heart melting sub-bass. Be on the lookout for this guy stopping in SLC on InsertDateHere!",
    event_time: "2019-01-14 21:30:00"
  )

  Event.create(
    host: "Subtronics",
    image_url: "https://res.cloudinary.com/dpvjbff4h/image/upload/v1547590892/Subtronics.jpg",
    event_date: "2019-06-22 00:00:00",
    dress_code: "Clothing optional",
    description: "Hailing from New York City, and having only been in the scene for less than two years. InsertNameHere has quickly gained attention and support from some of the bigger artists in the underground industry with his unique powerful growl baselines, and heart melting sub-bass. Be on the lookout for this guy stopping in SLC on InsertDateHere!",
    event_time: "2019-01-14 21:30:00"
  )

  Event.create(
    host: "Tritonal",
    image_url: "https://res.cloudinary.com/dpvjbff4h/image/upload/v1547590892/Tritonal.jpg",
    event_date: "2019-06-23 00:00:00",
    dress_code: "Clothing optional",
    description: "Hailing from New York City, and having only been in the scene for less than two years. InsertNameHere has quickly gained attention and support from some of the bigger artists in the underground industry with his unique powerful growl baselines, and heart melting sub-bass. Be on the lookout for this guy stopping in SLC on InsertDateHere!",
    event_time: "2019-01-14 21:30:00"
  )

  Event.create(
    host: "DJ_Jazzy",
    image_url: "https://res.cloudinary.com/dpvjbff4h/image/upload/v1547590891/DJ_Jazzy_Jeff.jpg",
    event_date: "2019-06-24 00:00:00",
    dress_code: "Clothing optional",
    description: "Hailing from New York City, and having only been in the scene for less than two years. InsertNameHere has quickly gained attention and support from some of the bigger artists in the underground industry with his unique powerful growl baselines, and heart melting sub-bass. Be on the lookout for this guy stopping in SLC on InsertDateHere!",
    event_time: "2019-01-14 21:30:00"
  )

  Event.create(
    host: "Method_Man",
    image_url: "https://res.cloudinary.com/dpvjbff4h/image/upload/v1547590891/Method_Man_Redman.jpg",
    event_date: "2019-06-27 00:00:00",
    dress_code: "Clothing optional",
    description: "Hailing from New York City, and having only been in the scene for less than two years. InsertNameHere has quickly gained attention and support from some of the bigger artists in the underground industry with his unique powerful growl baselines, and heart melting sub-bass. Be on the lookout for this guy stopping in SLC on InsertDateHere!",
    event_time: "2019-01-14 21:30:00"
  )

  Event.create(
    host: "Cesqeaux",
    image_url: "https://res.cloudinary.com/dpvjbff4h/image/upload/v1547590892/Cesqeaux.jpg",
    event_date: "2019-06-28 00:00:00",
    dress_code: "Clothing optional",
    description: "Hailing from New York City, and having only been in the scene for less than two years. InsertNameHere has quickly gained attention and support from some of the bigger artists in the underground industry with his unique powerful growl baselines, and heart melting sub-bass. Be on the lookout for this guy stopping in SLC on InsertDateHere!",
    event_time: "2019-01-14 21:30:00"
  )
  
  Event.create(
    host: "Jaycee",
    image_url: "https://res.cloudinary.com/dpvjbff4h/image/upload/v1547590892/Jaycee.jpg",
    event_date: "2019-06-29 00:00:00",
    dress_code: "Clothing optional",
    description: "Hailing from New York City, and having only been in the scene for less than two years. InsertNameHere has quickly gained attention and support from some of the bigger artists in the underground industry with his unique powerful growl baselines, and heart melting sub-bass. Be on the lookout for this guy stopping in SLC on InsertDateHere!",
    event_time: "2019-01-14 21:30:00"
  )

  HeroImage.create(
    image_url: 'https://d1qmdf3vop2l07.cloudfront.net/stable-juice.cloudvent.net/compressed/44231f0a485d4a9385ccd1f5d2b5b3ed.jpg',
    active: true,
  )

  HeroImage.create(
    image_url: 'https://d1qmdf3vop2l07.cloudfront.net/stable-juice.cloudvent.net/compressed/75068711a75e0bce1ce5ce18cb1405ad.jpg',
    active: true,
  )

  HeroImage.create(
    image_url: 'https://d1qmdf3vop2l07.cloudfront.net/stable-juice.cloudvent.net/compressed/d68bd683d7691a24531721370bbfdf6f.jpg',
    active: true,
  )

  HeroImage.create(
    image_url: 'https://d1qmdf3vop2l07.cloudfront.net/stable-juice.cloudvent.net/compressed/c0ee95171e97c2f764297c25f85f827b.jpg',
    active: true,
  )

  HeroImage.create(
    image_url: 'https://d1qmdf3vop2l07.cloudfront.net/stable-juice.cloudvent.net/compressed/67d2828550a30a3dcb87064944873e18.jpg',
    active: true,
  )

end

puts "Event Data Seeded, ADMIN ACCOUNT: admin@admin.com PASSWORD: password, USER ACCOUNT: test@test.com PASSWORD: password"
puts "2 Users, 30 Events, 5 HeroImages Created"