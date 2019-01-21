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

  Setting.create(
    venue_name: "SkySLC",
    logo: "https://res.cloudinary.com/xenmordin/image/upload/v1548095484/Table-App/Sky_SLC_White.svg",
    contact_us_blurb: "Far far away, behind the word mountains, far from the countries Vokalia and Consanatia.",
    street_address: "149 Pierpont Ave",
    city: "Salt Lake City",
    state: "UT",
    zip_code: 84101,
    telephone: "801.883.8714", 
    email: "contact@skyslc.com",
    about_us: "In 2013, Ken Dinsmore found himself at the world renowned Burning Man.
    
    As a temporary metropolis dedicated to community, art, self-expression, and self-reliance, he was impressed by the energy created by the congregation. He wanted to share this with his home of Salt Lake City and this building is his “gift to downtown.” In March of 2015, just a year after breaking ground, SKY was ready to revolutionize the way people view Utah nightlife.
    
    SKY is a versatile 3-floor space used for large scale events, weddings, private parties, concerts and nightclub events. The 15.000 sq ft open-air building is complete with the optimum sound, 300′′video screen, glass retractable roof, 20 VIP suites, 14 garage doors and performance lighting unlike anything else available in SLC; rivaling any other renowned entertainment facility in the world! Night Club, Event Space, Lounge and Patio... 
    
    Please come check us out at 149 Pierpont Ave, Downtown Salt Lake. Call or email us to tour the space, we know you’ll love it!",
    facebook_url: "https://www.facebook.com/skysaltlakecity",
    twitter_url: "https://twitter.com/SkyVenueSLC",
    instagram_url: "https://www.instagram.com/SKYSLC/",
    google_maps: "https://www.google.com/maps/place/Sky+SLC/@40.7636865,-111.8979172,17z/data=!3m1!4b1!4m5!3m4!1s0x8752f504fe784bb1:0xf5d34a840d1e4738!8m2!3d40.7636865!4d-111.8957285",
    longitude: -111.895558,
    latitude: 40.763691,
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