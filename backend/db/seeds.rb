# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Destination.destroy_all

des1 = Destination.create(city: "Berlin", country: "Germany", date: "Summer 2014", activities: "Tresor, zoo")
des2 = Destination.create(city: "Bungoma", country: "Kenya", date: "July-Aug 2017", activities: "Clubs, safari")
des3 = Destination.create(city: "Los Angeles", country: "USA", date: "November 2018", activities: "Skating, Camp Flog gnaw, hiking")
des4 = Destination.create(city: "Budapest", country: "Hungary", date: "September 2019", activities: "")