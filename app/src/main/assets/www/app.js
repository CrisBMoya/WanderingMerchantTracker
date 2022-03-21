// DB
const windowTime = {"1:30":{"Anikka":{"Mac":["Angler's Fishing Pole", "Tournament Entrance Stamp", "Sir Valleylead Card", "Sir Druden Card", "Madam Moonscent Card", "Wei Card"]}, "Yudia":{"Lucas":["Sky Reflection Oil", "Yudia Natural Salt", "Yudia Spell Book", "Morina Card", "Giant Worm Card", "Thunder Card"]}, "East Luterra":{"Morris":["Chain War Chronicles", "Dyorika Straw Hat", "Model of Luterra's Sword", "Azenaporium Brooch", "Morpheo Card", "Brinewt Card", "Meehan Card", "Thunder Wings Card"]}, "Shushire":{"Jeffrey":["Sirius's Holy Book", "Shimmering Essence", "Javern Card", "Sian Card", "Madnick Card"]}, "Feiton":{"Dorella":["Red Moon's Tears", "Dessicated Wooden Statue", "Book of Survival", "Broken Dagger", "Goulding Card", "Levi Card", "Kaldor Card"]}}, "4:30":{"Anikka":{"Mac":["Angler's Fishing Pole", "Tournament Entrance Stamp", "Sir Valleylead Card", "Sir Druden Card", "Madam Moonscent Card", "Wei Card"]}, "Yudia":{"Lucas":["Sky Reflection Oil", "Yudia Natural Salt", "Yudia Spell Book", "Morina Card", "Giant Worm Card", "Thunder Card"]}, "East Luterra":{"Morris":["Chain War Chronicles", "Dyorika Straw Hat", "Model of Luterra's Sword", "Azenaporium Brooch", "Morpheo Card", "Brinewt Card", "Meehan Card", "Thunder Wings Card"]}, "Shushire":{"Jeffrey":["Sirius's Holy Book", "Shimmering Essence", "Javern Card", "Sian Card", "Madnick Card"]}, "Feiton":{"Dorella":["Red Moon's Tears", "Dessicated Wooden Statue", "Book of Survival", "Broken Dagger", "Goulding Card", "Levi Card", "Kaldor Card"]}, "Rethramis":{"Ben":["Surprise Chest", "Fancier Bouquet", "Prideholme Potato", "Rethramis Holy water", "Siera Card", "Varut Card", "Prideholme Neria Card"]}, "North Vern":{"Peter":["Vern's Founding Coin", "Queen's Knights Application", "Exquisite Music Box", "Magick Cloth", "Magick Crystal", "Goblin Yam", "Gideon Card", "Payla Card", "Thar Card"]}, "Yorn":{"Laitir":["Fargar's Beer", "Piyer's Secret Textbook", "Piyer Card", "Great Castle Neria Card", "Kaysarr Card"]}}, "5:30":{"Anikka":{"Mac":["Angler's Fishing Pole", "Tournament Entrance Stamp", "Sir Valleylead Card", "Sir Druden Card", "Madam Moonscent Card", "Wei Card"]}, "Yudia":{"Lucas":["Sky Reflection Oil", "Yudia Natural Salt", "Yudia Spell Book", "Morina Card", "Giant Worm Card", "Thunder Card"]}, "East Luterra":{"Morris":["Chain War Chronicles", "Dyorika Straw Hat", "Model of Luterra's Sword", "Azenaporium Brooch", "Morpheo Card", "Brinewt Card", "Meehan Card", "Thunder Wings Card"]}, "Shushire":{"Jeffrey":["Sirius's Holy Book", "Shimmering Essence", "Javern Card", "Sian Card", "Madnick Card"]}, "Feiton":{"Dorella":["Red Moon's Tears", "Dessicated Wooden Statue", "Book of Survival", "Broken Dagger", "Goulding Card", "Levi Card", "Kaldor Card"]}, "West Luterra":{"Malone":["Chain War Chronicles", "Black Rose", "Lakebar", "Tomato Juice", "Cardogan Card", "Berhart Card", "Cassleford Card"]}, "Tortoyk":{"Burt":["Chain War Chronicles", "Dyorika Straw Hat", "Model of Luterra's Sword", "Azenaporium Brooch", "Nox Card", "Seria Card", "Thunder Wings Card"]}, "Arthetine":{"Oliver":["Shy Wind Flower Pollen", "Round Glass Piece", "Mokoko Carrot", "Oversize Ladybug Doll", "Egg of Creation Card", "Eolh Card", "Mokamoka Card"]}, "Rohendel":{"Nox":["Fine Gramophone", "Energy X7 Capsule", "Bergstrom Card", "Stern Neria Card", "Krause Card"]}, "Punika":{"Aricer":["Sylvain Queens' Blessing", "Soundstone of Dawn", "Elemental's Feather", "Danube's Earrings", "Alifer Card", "Lenora Card", "Gnosis Card"]}, "Anikka":{"Rayni":["Oreha Viewing Stone", "HollowFruit", "Pinata Crafting Set", "Rainbow Tikatika Flower", "Stella Card", "Cicerra Card", "Seto Card", "Albion Card"]}}, "7:30":{"Anikka":{"Mac":["Angler's Fishing Pole", "Tournament Entrance Stamp", "Sir Valleylead Card", "Sir Druden Card", "Madam Moonscent Card", "Wei Card"]}, "Yudia":{"Lucas":["Sky Reflection Oil", "Yudia Natural Salt", "Yudia Spell Book", "Morina Card", "Giant Worm Card", "Thunder Card"]}, "East Luterra":{"Morris":["Chain War Chronicles", "Dyorika Straw Hat", "Model of Luterra's Sword", "Azenaporium Brooch", "Morpheo Card", "Brinewt Card", "Meehan Card", "Thunder Wings Card"]}, "Shushire":{"Jeffrey":["Sirius's Holy Book", "Shimmering Essence", "Javern Card", "Sian Card", "Madnick Card"]}, "Feiton":{"Dorella":["Red Moon's Tears", "Dessicated Wooden Statue", "Book of Survival", "Broken Dagger", "Goulding Card", "Levi Card", "Kaldor Card"]}, "Rethramis":{"Ben":["Surprise Chest", "Fancier Bouquet", "Prideholme Potato", "Rethramis Holy water", "Siera Card", "Varut Card", "Prideholme Neria Card"]}, "North Vern":{"Peter":["Vern's Founding Coin", "Queen's Knights Application", "Exquisite Music Box", "Magick Cloth", "Magick Crystal", "Goblin Yam", "Gideon Card", "Payla Card", "Thar Card"]}, "Yorn":{"Laitir":["Fargar's Beer", "Piyer's Secret Textbook", "Piyer Card", "Great Castle Neria Card", "Kaysarr Card"]}}, "8:30":{"Anikka":{"Mac":["Angler's Fishing Pole", "Tournament Entrance Stamp", "Sir Valleylead Card", "Sir Druden Card", "Madam Moonscent Card", "Wei Card"]}, "Yudia":{"Lucas":["Sky Reflection Oil", "Yudia Natural Salt", "Yudia Spell Book", "Morina Card", "Giant Worm Card", "Thunder Card"]}, "East Luterra":{"Morris":["Chain War Chronicles", "Dyorika Straw Hat", "Model of Luterra's Sword", "Azenaporium Brooch", "Morpheo Card", "Brinewt Card", "Meehan Card", "Thunder Wings Card"]}, "Shushire":{"Jeffrey":["Sirius's Holy Book", "Shimmering Essence", "Javern Card", "Sian Card", "Madnick Card"]}, "Feiton":{"Dorella":["Red Moon's Tears", "Dessicated Wooden Statue", "Book of Survival", "Broken Dagger", "Goulding Card", "Levi Card", "Kaldor Card"]}, "West Luterra":{"Malone":["Chain War Chronicles", "Black Rose", "Lakebar", "Tomato Juice", "Cardogan Card", "Berhart Card", "Cassleford Card"]}, "Tortoyk":{"Burt":["Chain War Chronicles", "Dyorika Straw Hat", "Model of Luterra's Sword", "Azenaporium Brooch", "Nox Card", "Seria Card", "Thunder Wings Card"]}, "Arthetine":{"Oliver":["Shy Wind Flower Pollen", "Round Glass Piece", "Mokoko Carrot", "Oversize Ladybug Doll", "Egg of Creation Card", "Eolh Card", "Mokamoka Card"]}, "Rohendel":{"Nox":["Fine Gramophone", "Energy X7 Capsule", "Bergstrom Card", "Stern Neria Card", "Krause Card"]}, "Punika":{"Aricer":["Sylvain Queens' Blessing", "Soundstone of Dawn", "Elemental's Feather", "Danube's Earrings", "Alifer Card", "Lenora Card", "Gnosis Card"]}, "Anikka":{"Rayni":["Oreha Viewing Stone", "HollowFruit", "Pinata Crafting Set", "Rainbow Tikatika Flower", "Stella Card", "Cicerra Card", "Seto Card", "Albion Card"]}}, "11:30":{"Anikka":{"Mac":["Angler's Fishing Pole", "Tournament Entrance Stamp", "Sir Valleylead Card", "Sir Druden Card", "Madam Moonscent Card", "Wei Card"]}, "Yudia":{"Lucas":["Sky Reflection Oil", "Yudia Natural Salt", "Yudia Spell Book", "Morina Card", "Giant Worm Card", "Thunder Card"]}, "East Luterra":{"Morris":["Chain War Chronicles", "Dyorika Straw Hat", "Model of Luterra's Sword", "Azenaporium Brooch", "Morpheo Card", "Brinewt Card", "Meehan Card", "Thunder Wings Card"]}, "Shushire":{"Jeffrey":["Sirius's Holy Book", "Shimmering Essence", "Javern Card", "Sian Card", "Madnick Card"]}, "Feiton":{"Dorella":["Red Moon's Tears", "Dessicated Wooden Statue", "Book of Survival", "Broken Dagger", "Goulding Card", "Levi Card", "Kaldor Card"]}}, "12:30":{"West Luterra":{"Malone":["Chain War Chronicles", "Black Rose", "Lakebar", "Tomato Juice", "Cardogan Card", "Berhart Card", "Cassleford Card"]}, "East Luterra":{"Burt":["Chain War Chronicles", "Dyorika Straw Hat", "Model of Luterra's Sword", "Azenaporium Brooch", "Nox Card", "Seria Card", "Thunder Wings Card"]}, "Tortoyk":{"Oliver":["Shy Wind Flower Pollen", "Round Glass Piece", "Mokoko Carrot", "Oversize Ladybug Doll", "Egg of Creation Card", "Eolh Card", "Mokamoka Card"]}, "Arthetine":{"Nox":["Fine Gramophone", "Energy X7 Capsule", "Bergstrom Card", "Stern Neria Card", "Krause Card"]}, "Rohendel":{"Aricer":["Sylvain Queens' Blessing", "Soundstone of Dawn", "Elemental's Feather", "Danube's Earrings", "Alifer Card", "Lenora Card", "Gnosis Card"]}, "Punika":{"Rayni":["Oreha Viewing Stone", "HollowFruit", "Pinata Crafting Set", "Rainbow Tikatika Flower", "Stella Card", "Cicerra Card", "Seto Card", "Albion Card"]}, "Rethramis":{"Ben":["Surprise Chest", "Fancier Bouquet", "Prideholme Potato", "Rethramis Holy water", "Siera Card", "Varut Card", "Prideholme Neria Card"]}, "North Vern":{"Peter":["Vern's Founding Coin", "Queen's Knights Application", "Exquisite Music Box", "Magick Cloth", "Magick Crystal", "Goblin Yam", "Gideon Card", "Payla Card", "Thar Card"]}, "Yorn":{"Laitir":["Fargar's Beer", "Piyer's Secret Textbook", "Piyer Card", "Great Castle Neria Card", "Kaysarr Card"]}}, "2:30":{"West Luterra":{"Malone":["Chain War Chronicles", "Black Rose", "Lakebar", "Tomato Juice", "Cardogan Card", "Berhart Card", "Cassleford Card"]}, "East Luterra":{"Burt":["Chain War Chronicles", "Dyorika Straw Hat", "Model of Luterra's Sword", "Azenaporium Brooch", "Nox Card", "Seria Card", "Thunder Wings Card"]}, "Tortoyk":{"Oliver":["Shy Wind Flower Pollen", "Round Glass Piece", "Mokoko Carrot", "Oversize Ladybug Doll", "Egg of Creation Card", "Eolh Card", "Mokamoka Card"]}, "Arthetine":{"Nox":["Fine Gramophone", "Energy X7 Capsule", "Bergstrom Card", "Stern Neria Card", "Krause Card"]}, "Rohendel":{"Aricer":["Sylvain Queens' Blessing", "Soundstone of Dawn", "Elemental's Feather", "Danube's Earrings", "Alifer Card", "Lenora Card", "Gnosis Card"]}, "Punika":{"Rayni":["Oreha Viewing Stone", "HollowFruit", "Pinata Crafting Set", "Rainbow Tikatika Flower", "Stella Card", "Cicerra Card", "Seto Card", "Albion Card"]}}, "6:30":{"West Luterra":{"Malone":["Chain War Chronicles", "Black Rose", "Lakebar", "Tomato Juice", "Cardogan Card", "Berhart Card", "Cassleford Card"]}, "East Luterra":{"Burt":["Chain War Chronicles", "Dyorika Straw Hat", "Model of Luterra's Sword", "Azenaporium Brooch", "Nox Card", "Seria Card", "Thunder Wings Card"]}, "Tortoyk":{"Oliver":["Shy Wind Flower Pollen", "Round Glass Piece", "Mokoko Carrot", "Oversize Ladybug Doll", "Egg of Creation Card", "Eolh Card", "Mokamoka Card"]}, "Arthetine":{"Nox":["Fine Gramophone", "Energy X7 Capsule", "Bergstrom Card", "Stern Neria Card", "Krause Card"]}, "Rohendel":{"Aricer":["Sylvain Queens' Blessing", "Soundstone of Dawn", "Elemental's Feather", "Danube's Earrings", "Alifer Card", "Lenora Card", "Gnosis Card"]}, "Punika":{"Rayni":["Oreha Viewing Stone", "HollowFruit", "Pinata Crafting Set", "Rainbow Tikatika Flower", "Stella Card", "Cicerra Card", "Seto Card", "Albion Card"]}, "Rethramis":{"Ben":["Surprise Chest", "Fancier Bouquet", "Prideholme Potato", "Rethramis Holy water", "Siera Card", "Varut Card", "Prideholme Neria Card"]}, "North Vern":{"Peter":["Vern's Founding Coin", "Queen's Knights Application", "Exquisite Music Box", "Magick Cloth", "Magick Crystal", "Goblin Yam", "Gideon Card", "Payla Card", "Thar Card"]}, "Yorn":{"Laitir":["Fargar's Beer", "Piyer's Secret Textbook", "Piyer Card", "Great Castle Neria Card", "Kaysarr Card"]}}, "9:30":{"West Luterra":{"Malone":["Chain War Chronicles", "Black Rose", "Lakebar", "Tomato Juice", "Cardogan Card", "Berhart Card", "Cassleford Card"]}, "East Luterra":{"Burt":["Chain War Chronicles", "Dyorika Straw Hat", "Model of Luterra's Sword", "Azenaporium Brooch", "Nox Card", "Seria Card", "Thunder Wings Card"]}, "Tortoyk":{"Oliver":["Shy Wind Flower Pollen", "Round Glass Piece", "Mokoko Carrot", "Oversize Ladybug Doll", "Egg of Creation Card", "Eolh Card", "Mokamoka Card"]}, "Arthetine":{"Nox":["Fine Gramophone", "Energy X7 Capsule", "Bergstrom Card", "Stern Neria Card", "Krause Card"]}, "Rohendel":{"Aricer":["Sylvain Queens' Blessing", "Soundstone of Dawn", "Elemental's Feather", "Danube's Earrings", "Alifer Card", "Lenora Card", "Gnosis Card"]}, "Punika":{"Rayni":["Oreha Viewing Stone", "HollowFruit", "Pinata Crafting Set", "Rainbow Tikatika Flower", "Stella Card", "Cicerra Card", "Seto Card", "Albion Card"]}}, "3:30":{"Rethramis":{"Ben":["Surprise Chest", "Fancier Bouquet", "Prideholme Potato", "Rethramis Holy water", "Siera Card", "Varut Card", "Prideholme Neria Card"]}, "North Vern":{"Peter":["Vern's Founding Coin", "Queen's Knights Application", "Exquisite Music Box", "Magick Cloth", "Magick Crystal", "Goblin Yam", "Gideon Card", "Payla Card", "Thar Card"]}, "Yorn":{"Laitir":["Fargar's Beer", "Piyer's Secret Textbook", "Piyer Card", "Great Castle Neria Card", "Kaysarr Card"]}}, "10:30":{"Rethramis":{"Ben":["Surprise Chest", "Fancier Bouquet", "Prideholme Potato", "Rethramis Holy water", "Siera Card", "Varut Card", "Prideholme Neria Card"]}, "North Vern":{"Peter":["Vern's Founding Coin", "Queen's Knights Application", "Exquisite Music Box", "Magick Cloth", "Magick Crystal", "Goblin Yam", "Gideon Card", "Payla Card", "Thar Card"]}, "Yorn":{"Laitir":["Fargar's Beer", "Piyer's Secret Textbook", "Piyer Card", "Great Castle Neria Card", "Kaysarr Card"]}},"13:30":{"Anikka":{"Mac":["Angler's Fishing Pole", "Tournament Entrance Stamp", "Sir Valleylead Card", "Sir Druden Card", "Madam Moonscent Card", "Wei Card"]}, "Yudia":{"Lucas":["Sky Reflection Oil", "Yudia Natural Salt", "Yudia Spell Book", "Morina Card", "Giant Worm Card", "Thunder Card"]}, "East Luterra":{"Morris":["Chain War Chronicles", "Dyorika Straw Hat", "Model of Luterra's Sword", "Azenaporium Brooch", "Morpheo Card", "Brinewt Card", "Meehan Card", "Thunder Wings Card"]}, "Shushire":{"Jeffrey":["Sirius's Holy Book", "Shimmering Essence", "Javern Card", "Sian Card", "Madnick Card"]}, "Feiton":{"Dorella":["Red Moon's Tears", "Dessicated Wooden Statue", "Book of Survival", "Broken Dagger", "Goulding Card", "Levi Card", "Kaldor Card"]}}, "16:30":{"Anikka":{"Mac":["Angler's Fishing Pole", "Tournament Entrance Stamp", "Sir Valleylead Card", "Sir Druden Card", "Madam Moonscent Card", "Wei Card"]}, "Yudia":{"Lucas":["Sky Reflection Oil", "Yudia Natural Salt", "Yudia Spell Book", "Morina Card", "Giant Worm Card", "Thunder Card"]}, "East Luterra":{"Morris":["Chain War Chronicles", "Dyorika Straw Hat", "Model of Luterra's Sword", "Azenaporium Brooch", "Morpheo Card", "Brinewt Card", "Meehan Card", "Thunder Wings Card"]}, "Shushire":{"Jeffrey":["Sirius's Holy Book", "Shimmering Essence", "Javern Card", "Sian Card", "Madnick Card"]}, "Feiton":{"Dorella":["Red Moon's Tears", "Dessicated Wooden Statue", "Book of Survival", "Broken Dagger", "Goulding Card", "Levi Card", "Kaldor Card"]}, "Rethramis":{"Ben":["Surprise Chest", "Fancier Bouquet", "Prideholme Potato", "Rethramis Holy water", "Siera Card", "Varut Card", "Prideholme Neria Card"]}, "North Vern":{"Peter":["Vern's Founding Coin", "Queen's Knights Application", "Exquisite Music Box", "Magick Cloth", "Magick Crystal", "Goblin Yam", "Gideon Card", "Payla Card", "Thar Card"]}, "Yorn":{"Laitir":["Fargar's Beer", "Piyer's Secret Textbook", "Piyer Card", "Great Castle Neria Card", "Kaysarr Card"]}}, "17:30":{"Anikka":{"Mac":["Angler's Fishing Pole", "Tournament Entrance Stamp", "Sir Valleylead Card", "Sir Druden Card", "Madam Moonscent Card", "Wei Card"]}, "Yudia":{"Lucas":["Sky Reflection Oil", "Yudia Natural Salt", "Yudia Spell Book", "Morina Card", "Giant Worm Card", "Thunder Card"]}, "East Luterra":{"Morris":["Chain War Chronicles", "Dyorika Straw Hat", "Model of Luterra's Sword", "Azenaporium Brooch", "Morpheo Card", "Brinewt Card", "Meehan Card", "Thunder Wings Card"]}, "Shushire":{"Jeffrey":["Sirius's Holy Book", "Shimmering Essence", "Javern Card", "Sian Card", "Madnick Card"]}, "Feiton":{"Dorella":["Red Moon's Tears", "Dessicated Wooden Statue", "Book of Survival", "Broken Dagger", "Goulding Card", "Levi Card", "Kaldor Card"]}, "West Luterra":{"Malone":["Chain War Chronicles", "Black Rose", "Lakebar", "Tomato Juice", "Cardogan Card", "Berhart Card", "Cassleford Card"]}, "Tortoyk":{"Burt":["Chain War Chronicles", "Dyorika Straw Hat", "Model of Luterra's Sword", "Azenaporium Brooch", "Nox Card", "Seria Card", "Thunder Wings Card"]}, "Arthetine":{"Oliver":["Shy Wind Flower Pollen", "Round Glass Piece", "Mokoko Carrot", "Oversize Ladybug Doll", "Egg of Creation Card", "Eolh Card", "Mokamoka Card"]}, "Rohendel":{"Nox":["Fine Gramophone", "Energy X7 Capsule", "Bergstrom Card", "Stern Neria Card", "Krause Card"]}, "Punika":{"Aricer":["Sylvain Queens' Blessing", "Soundstone of Dawn", "Elemental's Feather", "Danube's Earrings", "Alifer Card", "Lenora Card", "Gnosis Card"]}, "Anikka":{"Rayni":["Oreha Viewing Stone", "HollowFruit", "Pinata Crafting Set", "Rainbow Tikatika Flower", "Stella Card", "Cicerra Card", "Seto Card", "Albion Card"]}}, "19:30":{"Anikka":{"Mac":["Angler's Fishing Pole", "Tournament Entrance Stamp", "Sir Valleylead Card", "Sir Druden Card", "Madam Moonscent Card", "Wei Card"]}, "Yudia":{"Lucas":["Sky Reflection Oil", "Yudia Natural Salt", "Yudia Spell Book", "Morina Card", "Giant Worm Card", "Thunder Card"]}, "East Luterra":{"Morris":["Chain War Chronicles", "Dyorika Straw Hat", "Model of Luterra's Sword", "Azenaporium Brooch", "Morpheo Card", "Brinewt Card", "Meehan Card", "Thunder Wings Card"]}, "Shushire":{"Jeffrey":["Sirius's Holy Book", "Shimmering Essence", "Javern Card", "Sian Card", "Madnick Card"]}, "Feiton":{"Dorella":["Red Moon's Tears", "Dessicated Wooden Statue", "Book of Survival", "Broken Dagger", "Goulding Card", "Levi Card", "Kaldor Card"]}, "Rethramis":{"Ben":["Surprise Chest", "Fancier Bouquet", "Prideholme Potato", "Rethramis Holy water", "Siera Card", "Varut Card", "Prideholme Neria Card"]}, "North Vern":{"Peter":["Vern's Founding Coin", "Queen's Knights Application", "Exquisite Music Box", "Magick Cloth", "Magick Crystal", "Goblin Yam", "Gideon Card", "Payla Card", "Thar Card"]}, "Yorn":{"Laitir":["Fargar's Beer", "Piyer's Secret Textbook", "Piyer Card", "Great Castle Neria Card", "Kaysarr Card"]}}, "20:30":{"Anikka":{"Mac":["Angler's Fishing Pole", "Tournament Entrance Stamp", "Sir Valleylead Card", "Sir Druden Card", "Madam Moonscent Card", "Wei Card"]}, "Yudia":{"Lucas":["Sky Reflection Oil", "Yudia Natural Salt", "Yudia Spell Book", "Morina Card", "Giant Worm Card", "Thunder Card"]}, "East Luterra":{"Morris":["Chain War Chronicles", "Dyorika Straw Hat", "Model of Luterra's Sword", "Azenaporium Brooch", "Morpheo Card", "Brinewt Card", "Meehan Card", "Thunder Wings Card"]}, "Shushire":{"Jeffrey":["Sirius's Holy Book", "Shimmering Essence", "Javern Card", "Sian Card", "Madnick Card"]}, "Feiton":{"Dorella":["Red Moon's Tears", "Dessicated Wooden Statue", "Book of Survival", "Broken Dagger", "Goulding Card", "Levi Card", "Kaldor Card"]}, "West Luterra":{"Malone":["Chain War Chronicles", "Black Rose", "Lakebar", "Tomato Juice", "Cardogan Card", "Berhart Card", "Cassleford Card"]}, "Tortoyk":{"Burt":["Chain War Chronicles", "Dyorika Straw Hat", "Model of Luterra's Sword", "Azenaporium Brooch", "Nox Card", "Seria Card", "Thunder Wings Card"]}, "Arthetine":{"Oliver":["Shy Wind Flower Pollen", "Round Glass Piece", "Mokoko Carrot", "Oversize Ladybug Doll", "Egg of Creation Card", "Eolh Card", "Mokamoka Card"]}, "Rohendel":{"Nox":["Fine Gramophone", "Energy X7 Capsule", "Bergstrom Card", "Stern Neria Card", "Krause Card"]}, "Punika":{"Aricer":["Sylvain Queens' Blessing", "Soundstone of Dawn", "Elemental's Feather", "Danube's Earrings", "Alifer Card", "Lenora Card", "Gnosis Card"]}, "Anikka":{"Rayni":["Oreha Viewing Stone", "HollowFruit", "Pinata Crafting Set", "Rainbow Tikatika Flower", "Stella Card", "Cicerra Card", "Seto Card", "Albion Card"]}}, "23:30":{"Anikka":{"Mac":["Angler's Fishing Pole", "Tournament Entrance Stamp", "Sir Valleylead Card", "Sir Druden Card", "Madam Moonscent Card", "Wei Card"]}, "Yudia":{"Lucas":["Sky Reflection Oil", "Yudia Natural Salt", "Yudia Spell Book", "Morina Card", "Giant Worm Card", "Thunder Card"]}, "East Luterra":{"Morris":["Chain War Chronicles", "Dyorika Straw Hat", "Model of Luterra's Sword", "Azenaporium Brooch", "Morpheo Card", "Brinewt Card", "Meehan Card", "Thunder Wings Card"]}, "Shushire":{"Jeffrey":["Sirius's Holy Book", "Shimmering Essence", "Javern Card", "Sian Card", "Madnick Card"]}, "Feiton":{"Dorella":["Red Moon's Tears", "Dessicated Wooden Statue", "Book of Survival", "Broken Dagger", "Goulding Card", "Levi Card", "Kaldor Card"]}}, "0:30":{"West Luterra":{"Malone":["Chain War Chronicles", "Black Rose", "Lakebar", "Tomato Juice", "Cardogan Card", "Berhart Card", "Cassleford Card"]}, "East Luterra":{"Burt":["Chain War Chronicles", "Dyorika Straw Hat", "Model of Luterra's Sword", "Azenaporium Brooch", "Nox Card", "Seria Card", "Thunder Wings Card"]}, "Tortoyk":{"Oliver":["Shy Wind Flower Pollen", "Round Glass Piece", "Mokoko Carrot", "Oversize Ladybug Doll", "Egg of Creation Card", "Eolh Card", "Mokamoka Card"]}, "Arthetine":{"Nox":["Fine Gramophone", "Energy X7 Capsule", "Bergstrom Card", "Stern Neria Card", "Krause Card"]}, "Rohendel":{"Aricer":["Sylvain Queens' Blessing", "Soundstone of Dawn", "Elemental's Feather", "Danube's Earrings", "Alifer Card", "Lenora Card", "Gnosis Card"]}, "Punika":{"Rayni":["Oreha Viewing Stone", "HollowFruit", "Pinata Crafting Set", "Rainbow Tikatika Flower", "Stella Card", "Cicerra Card", "Seto Card", "Albion Card"]}, "Rethramis":{"Ben":["Surprise Chest", "Fancier Bouquet", "Prideholme Potato", "Rethramis Holy water", "Siera Card", "Varut Card", "Prideholme Neria Card"]}, "North Vern":{"Peter":["Vern's Founding Coin", "Queen's Knights Application", "Exquisite Music Box", "Magick Cloth", "Magick Crystal", "Goblin Yam", "Gideon Card", "Payla Card", "Thar Card"]}, "Yorn":{"Laitir":["Fargar's Beer", "Piyer's Secret Textbook", "Piyer Card", "Great Castle Neria Card", "Kaysarr Card"]}}, "14:30":{"West Luterra":{"Malone":["Chain War Chronicles", "Black Rose", "Lakebar", "Tomato Juice", "Cardogan Card", "Berhart Card", "Cassleford Card"]}, "East Luterra":{"Burt":["Chain War Chronicles", "Dyorika Straw Hat", "Model of Luterra's Sword", "Azenaporium Brooch", "Nox Card", "Seria Card", "Thunder Wings Card"]}, "Tortoyk":{"Oliver":["Shy Wind Flower Pollen", "Round Glass Piece", "Mokoko Carrot", "Oversize Ladybug Doll", "Egg of Creation Card", "Eolh Card", "Mokamoka Card"]}, "Arthetine":{"Nox":["Fine Gramophone", "Energy X7 Capsule", "Bergstrom Card", "Stern Neria Card", "Krause Card"]}, "Rohendel":{"Aricer":["Sylvain Queens' Blessing", "Soundstone of Dawn", "Elemental's Feather", "Danube's Earrings", "Alifer Card", "Lenora Card", "Gnosis Card"]}, "Punika":{"Rayni":["Oreha Viewing Stone", "HollowFruit", "Pinata Crafting Set", "Rainbow Tikatika Flower", "Stella Card", "Cicerra Card", "Seto Card", "Albion Card"]}}, "18:30":{"West Luterra":{"Malone":["Chain War Chronicles", "Black Rose", "Lakebar", "Tomato Juice", "Cardogan Card", "Berhart Card", "Cassleford Card"]}, "East Luterra":{"Burt":["Chain War Chronicles", "Dyorika Straw Hat", "Model of Luterra's Sword", "Azenaporium Brooch", "Nox Card", "Seria Card", "Thunder Wings Card"]}, "Tortoyk":{"Oliver":["Shy Wind Flower Pollen", "Round Glass Piece", "Mokoko Carrot", "Oversize Ladybug Doll", "Egg of Creation Card", "Eolh Card", "Mokamoka Card"]}, "Arthetine":{"Nox":["Fine Gramophone", "Energy X7 Capsule", "Bergstrom Card", "Stern Neria Card", "Krause Card"]}, "Rohendel":{"Aricer":["Sylvain Queens' Blessing", "Soundstone of Dawn", "Elemental's Feather", "Danube's Earrings", "Alifer Card", "Lenora Card", "Gnosis Card"]}, "Punika":{"Rayni":["Oreha Viewing Stone", "HollowFruit", "Pinata Crafting Set", "Rainbow Tikatika Flower", "Stella Card", "Cicerra Card", "Seto Card", "Albion Card"]}, "Rethramis":{"Ben":["Surprise Chest", "Fancier Bouquet", "Prideholme Potato", "Rethramis Holy water", "Siera Card", "Varut Card", "Prideholme Neria Card"]}, "North Vern":{"Peter":["Vern's Founding Coin", "Queen's Knights Application", "Exquisite Music Box", "Magick Cloth", "Magick Crystal", "Goblin Yam", "Gideon Card", "Payla Card", "Thar Card"]}, "Yorn":{"Laitir":["Fargar's Beer", "Piyer's Secret Textbook", "Piyer Card", "Great Castle Neria Card", "Kaysarr Card"]}}, "21:30":{"West Luterra":{"Malone":["Chain War Chronicles", "Black Rose", "Lakebar", "Tomato Juice", "Cardogan Card", "Berhart Card", "Cassleford Card"]}, "East Luterra":{"Burt":["Chain War Chronicles", "Dyorika Straw Hat", "Model of Luterra's Sword", "Azenaporium Brooch", "Nox Card", "Seria Card", "Thunder Wings Card"]}, "Tortoyk":{"Oliver":["Shy Wind Flower Pollen", "Round Glass Piece", "Mokoko Carrot", "Oversize Ladybug Doll", "Egg of Creation Card", "Eolh Card", "Mokamoka Card"]}, "Arthetine":{"Nox":["Fine Gramophone", "Energy X7 Capsule", "Bergstrom Card", "Stern Neria Card", "Krause Card"]}, "Rohendel":{"Aricer":["Sylvain Queens' Blessing", "Soundstone of Dawn", "Elemental's Feather", "Danube's Earrings", "Alifer Card", "Lenora Card", "Gnosis Card"]}, "Punika":{"Rayni":["Oreha Viewing Stone", "HollowFruit", "Pinata Crafting Set", "Rainbow Tikatika Flower", "Stella Card", "Cicerra Card", "Seto Card", "Albion Card"]}}, "15:30":{"Rethramis":{"Ben":["Surprise Chest", "Fancier Bouquet", "Prideholme Potato", "Rethramis Holy water", "Siera Card", "Varut Card", "Prideholme Neria Card"]}, "North Vern":{"Peter":["Vern's Founding Coin", "Queen's Knights Application", "Exquisite Music Box", "Magick Cloth", "Magick Crystal", "Goblin Yam", "Gideon Card", "Payla Card", "Thar Card"]}, "Yorn":{"Laitir":["Fargar's Beer", "Piyer's Secret Textbook", "Piyer Card", "Great Castle Neria Card", "Kaysarr Card"]}}, "22:30":{"Rethramis":{"Ben":["Surprise Chest", "Fancier Bouquet", "Prideholme Potato", "Rethramis Holy water", "Siera Card", "Varut Card", "Prideholme Neria Card"]}, "North Vern":{"Peter":["Vern's Founding Coin", "Queen's Knights Application", "Exquisite Music Box", "Magick Cloth", "Magick Crystal", "Goblin Yam", "Gideon Card", "Payla Card", "Thar Card"]}, "Yorn":{"Laitir":["Fargar's Beer", "Piyer's Secret Textbook", "Piyer Card", "Great Castle Neria Card", "Kaysarr Card"]}}}
const innerMap = {'Anikka':{'Mac':['Delphi Township', 'Rattan Hill', 'Melody Forest', 'Twilight Mists']}, 'Yudia':{'Lucas':['Saland Hill', 'Ozhorn Hill']}, 'East Luterra':{'Morris':['Dyorika Plains', 'Sunbright Hill', 'Flowring Orchard']}, 'Shushire':{'Jeffrey':['Frozen Sea', 'Bitterwind Hill', 'Iceblood Plateau', 'Lake Eternity']}, 'Feiton':{'Dorella':['Feiton']}, 'West Luterra':{'Malone':['Mount Zagoras', 'Lakebar', 'Medrick Monastery', 'Bilbrin Forest']}, 'East Luterra':{'Burt':['Blackrose Chapel', 'Leyar Terrace', 'Boreas Domain', 'Croconys Seashore']}, 'Tortoyk':{'Oliver':['Seaswept Woods', 'Sweetwater Forest', 'Skyreach Steppe', 'Forest of Giants']}, 'Arthetine':{'Nox':['Arid Path', 'Scraplands', 'Nebel Horn', 'Windbringer Hill', 'Tottrich', 'Riza Falls']}, 'Rohendel':{'Aricer':['Lake Shiverwave', 'Glass Lotus Lake', 'Breezone Brae', 'Xeneela Ruins', 'Elzowins Shade']}, 'Punika':{'Rayni':['Tideshelf Path', 'Starsand Beach', 'Tikatika Colony', 'Secret Forest']}, 'Rethramis':{'Ben':['Log Hill', 'Ankumo Mountain', 'Rethramis Border']}, 'North Vern':{'Peter':['Port Krona', 'Parna Forest', 'Fesnar Highland', 'Vernese Forest', 'Balankar Mountain']}, 'Yorn':{'Laitir':['Yorns Cradle', 'Unfinished Garden', 'Black Anvil Mine', 'Iron Hammer Mine', 'Hall of Promise']}}
const wholeItemList = ["Angler's Fishing Pole", "Sky Reflection Oil", "Chain War Chronicles", "Sirius's Holy Book", "Red Moon's Tears", "Shy Wind Flower Pollen", "Fine Gramophone", "Sylvain Queens' Blessing", "Oreha Viewing Stone", "Surprise Chest", "Vern's Founding Coin", "Fargar's Beer", "Tournament Entrance Stamp", "Yudia Natural Salt", "Dyorika Straw Hat", "Shimmering Essence", "Dessicated Wooden Statue", "Black Rose", "Round Glass Piece", "Energy X7 Capsule", "Soundstone of Dawn", "HollowFruit", "Fancier Bouquet", "Queen's Knights Application", "Piyer's Secret Textbook", "Sir Valleylead Card", "Yudia Spell Book", "Model of Luterra's Sword", "Javern Card", "Book of Survival", "Lakebar", "Mokoko Carrot", "Bergstrom Card", "Elemental's Feather", "Pinata Crafting Set", "Prideholme Potato", "Exquisite Music Box", "Piyer Card", "Sir Druden Card", "Morina Card", "Azenaporium Brooch", "Sian Card", "Broken Dagger", "Tomato Juice", "Oversize Ladybug Doll", "Stern Neria Card", "Danube's Earrings", "Rainbow Tikatika Flower", "Rethramis Holy water", "Magick Cloth", "Great Castle Neria Card", "Madam Moonscent Card", "Giant Worm Card", "Morpheo Card", "Madnick Card", "Goulding Card", "Cardogan Card", "Nox Card", "Egg of Creation Card", "Krause Card", "Alifer Card", "Stella Card", "Siera Card", "Magick Crystal", "Kaysarr Card", "Wei Card", "Thunder Card", "Brinewt Card", "Levi Card", "Berhart Card", "Seria Card", "Eolh Card", "Lenora Card", "Cicerra Card", "Varut Card", "Goblin Yam", "Meehan Card", "Kaldor Card", "Cassleford Card", "Thunder Wings Card", "Mokamoka Card", "Gnosis Card", "Seto Card", "Prideholme Neria Card", "Gideon Card", "Albion Card", "Payla Card", "Thar Card"]
const merchantMap = {"Mac":["traveling_merchant_mac_delphi_township.jpg", "Delphi Township", "traveling_merchant_mac_melody_forest.jpg", "Melody Forest", "traveling_merchant_mac_mirror_valley.jpg", "Mirror Valley", "traveling_merchant_mac_rattan_hill.jpg", "Rattan Hill", "traveling_merchant_mac_twilight_mists.jpg", "Twilight Mists"], "Lucas":["yudia_wandering_merchant_lucas_ozhorn_hill.jpg", "Ozhorn Hill", "yudia_wandering_merchant_lucas_saland_hill.jpg", "Saland Hill"], "Morris":["morris_dyorika_plains_10.jpg", "Dyorika Plains", "morris_flowering_orchard_10.jpg", "Flowering Orchard", "morris_sunbright_hill_10.jpg", "Sunbright Hill"], "Jeffrey":["wandering_merchant_jeffrey_bitterwind_hill_v2.jpg", "Bitterwind Hill", "wandering_merchant_jeffrey_frozen_sea_v2.jpg", "Frozen Sea", "wandering_merchant_jeffrey_ice_blood_plateau_v2.jpg", "Iceblood Plateau", "wandering_merchant_jeffrey_icewing_heights_v2.jpg", "Icewing Heights", "wandering_merchant_jeffrey_lake_eternity_v2.jpg", "Lake Eternity"], "Dorella":["Dorelia_Feiton.jpg", "Feiton"], "Malone":["malone_battlebound_plains.jpg", "Battlebound Plains", "malone_bilbrin_forest.jpg", "Bilbrin Forest", "malone_lakebar.jpg", "Lakebar", "malone_medrick_monastery.jpg", "Medrick Monastery", "malone_mount_zagoras.jpg", "Mount Zagoras"], "Burt":["burt_blackrose_chapel_v4.jpg", "Blackrose Chapel", "burt_boreas_domain_v4.jpg", "Boreas Domain", "burt_croconys_seashore_v4.jpg", "Croconys Seashore", "burt_layer_terrace_v4.jpg", "Layer Terrace"], "Oliver":["wandering_merchant_oliver_forest_of_giants.jpg", "Forest of Giants", "wandering_merchant_oliver_seaswept_woods.jpg", "Seaswept Woods", "wandering_merchant_oliver_skyreach_steppe.jpg", "Skyreach Steppe", "wandering_merchant_oliver_sweetwater_forest.jpg", "Sweetwater Forest"], "Nox":["wandering_merchant_nox_arid_path.jpg", "Arid Path", "wandering_merchant_nox_nebel_horn.jpg", "Nebel Horn", "wandering_merchant_nox_riza_falls.jpg", "Riza Falls", "wandering_merchant_nox_scraplands.jpg", "Scraplands", "wandering_merchant_nox_tottrich.jpg", "Tottrich", "wandering_merchant_nox_windbringer_hill.jpg", "Windbringer Hill"], "Aricer":["aricer_breezesome_brae.jpg", "Breezome Brae", "aricer_elzowins_shade.jpg", "Elzowins Shade", "aricer_lake_shiverwave.jpg", "Lake Siverwave", "aricer_xeneela_ruins.jpg", "Xeneela Ruins"], "Rayni":["Rayni_punika_wandering_merchant_1_v1.jpg", "Tideshelf Path", "Rayni_punika_wandering_merchant_2_v1.jpg", "Starsand Beach", "Rayni_punika_wandering_merchant_3_v1.jpg", "Tikatika Colony", "Rayni_punika_wandering_merchant_4_v1.jpg", "Secret Forest"], "Ben":["Ben_rethramis_wm_ankumo_mountain_750.jpg", "Ankumo Mountain", "Ben_rethramis_wm_log_hill_750.jpg", "Log Hill", "Ben_rethramis_wm_rethramis_border_750.jpg", "Rethramis Border", "wandering_merchant_ben_ankumo_mountain_v2.jpg", "Ankumo Mountain", "wandering_merchant_ben_log_hill_v2.jpg", "Log Hill", "wandering_merchant_ben_rethramis_border_v2.jpg", "Rethramis Border"], "Peter":["wandering_merchant_peter_balankar_mountains.jpg", "Balankar Mountain", "wandering_merchant_peter_fesnar_highland.jpg", "Fesnar Highland", "wandering_merchant_peter_parna_forest.jpg", "Parna Forest", "wandering_merchant_peter_port_krona.jpg", "Port Krona", "wandering_merchant_peter_vernese_forest.jpg", "Vernese Forest"], "Laitir":["laitir_black_anvil_mine_v1.jpg", "Black Anvil Mine", "laitir_hall_of_promise.jpg", "Hall of Promise", "laitir_iron_hammer_mine_v1.jpg", "Iron Hammer Mine", "laitir_unfinished_garden_v1.jpg", "Unfinished Garden", "laitir_yorns_cradle_v1.jpg", "Yorns Cradle"]}


// const continentList = ['Anikka', 'Yudia', 'East Luterra', 'Shushire', 'Feiton', 'West Luterra', 'Tortoyk', 'Arthetine', 'Rohendel', 'Punika', 'Rethramis', 'North Vern', 'Yorn']
const continentList = ['Anikka', 'Yudia', 'East Luterra', 'Shushire', 'Feiton', 'West Luterra', 'Tortoyk', 'Arthetine', 'Rohendel', 'Punika', 'Rethramis', 'North Vern', 'Yorn']
const continentListAlternative = ['Anikka', 'Yudia', 'EastLuterra', 'Shushire', 'Feiton', 'WestLuterra', 'Tortoyk', 'Arthetine', 'Rohendel', 'Punika', 'Rethramis', 'NorthVern', 'Yorn']

var item_chosen = []
var justStarted = true

const time_offset = -1

function saveItems(){
   AndroidInterface.saveItemsJava(item_chosen.join("-"))
}

function loadItems(){
   if(justStarted){
      item_chosen = AndroidInterface.loadItemsJava().split("-") // Load saved list items and assign to list
      justStarted = false
   }
}
loadItems() // Run only once when app is started

function continentInfo(x){   
   var main_div = document.getElementById("MainPage")
   main_div.innerHTML = "";

   var today = new Date();
   var currentTime = (today.getHours() + time_offset) + ":30"

   var div = document.createElement("div")
   div.setAttribute("id", "vendorInfo")

   var div_item_list = document.createElement("div")

   if(typeof windowTime[currentTime][x] == "undefined"){ // No vendors
      div.appendChild(document.createTextNode(x))
      div.appendChild(document.createElement("br"))
      div.appendChild(document.createTextNode("No vendors at this time"))
      document.getElementById("MainPage").appendChild(div);
   } else {
      var jsonKeys = Object.keys(windowTime[currentTime]) // Vendors exist

      div.appendChild(document.createTextNode(x)) // Continent name
      div.appendChild(document.createElement("br"))
      div.appendChild(document.createElement("br"))

      var currentVendor = Object.keys(windowTime[currentTime][x])
      
      for(let i = 0; i < currentVendor.length; i++){

         if(today.getMinutes() < 55 && today.getMinutes() > 0 && jsonKeys.includes(x)){
            div.appendChild(document.createTextNode(currentVendor[i] + ": ")) // Current vendor name
            div.appendChild(document.createElement("br"))

            var itemList = windowTime[currentTime][x][currentVendor[i]]
            for(let y = 0; y < itemList.length; y++){
               var img_item = document.createElement("img")              

               var img_source = "data/icon/" + itemList[y] + ".png"
               if(itemList[y].includes("Card")){
                  img_source = "data/icon/Card.png"
               }
         
               img_item.setAttribute("src", img_source)
               img_item.setAttribute("class", "icon_img")

               div_item_list.appendChild(img_item)
               div_item_list.appendChild(document.createTextNode(itemList[y])) 
               div_item_list.appendChild(document.createElement("br"))
               div.appendChild(div_item_list)

            }
            div.appendChild(document.createElement("br"))
            
         } else {
            div.appendChild(document.createTextNode("No vendors at this time"))
         }         
      }
   }

   div.appendChild(document.createElement("br"))
   
   const btn_element = document.createElement("button")
   btn_element.innerHTML = "Back"
   btn_element.addEventListener("click", function(){
      backBtn()
   })
   div.appendChild(btn_element)

   // Button to trigger all maps images
   const map_btn = document.createElement("button")
   map_btn.innerHTML = "Maps"
   map_btn.addEventListener("click", function(){
      chose_merchant(currentVendor)
   })
   div.appendChild(map_btn)

   main_div.appendChild(div)   
}

function backBtn(){
   var main_div = document.getElementById("MainPage")
   main_div.innerHTML = ""; // clean UI

   main_div.scrollTop = 0 // Restart position

   // Btn elements
   var btn_element = document.createElement("button")
   var btn_srchitem = document.createElement("button")
   var div_content = document.createElement("content")

   btn_element.setAttribute("type", "button")
   btn_element.setAttribute("onclick", "collapsetest()")
   btn_element.setAttribute("class", "collapsible")
   btn_element.innerText = "Now"

   btn_srchitem.setAttribute("type", "button")
   btn_srchitem.setAttribute("onclick", "searchItem()")
   btn_srchitem.setAttribute("class", "collapsible")
   btn_srchitem.setAttribute("id", "itemmenu")
   btn_srchitem.innerText = "Item List"

   div_content.setAttribute("id", "content")
   div_content.setAttribute("class", "content")

   main_div.appendChild(btn_element)
   main_div.appendChild(div_content)
   main_div.appendChild(btn_srchitem)

   var div = document.createElement("Continent")

   for(let i = 0; i < continentList.length; i++){     

      // // Create elements      
      // var a_element = document.createElement("a")
      // var img_element = document.createElement("img")

      // // Add function values
      // a_element.setAttribute("href", "#")
      // a_element.setAttribute("onclick", "continentInfo('" + continentList[i] + "');")

      // // Add Images
      // img_element.setAttribute("src", "data/" + continentList[i] + ".png")
      // img_element.setAttribute("id", continentListAlternative[i] + "Img")

      // // Append
      // a_element.appendChild(img_element)
      // div.appendChild(a_element)

      var btn_element = document.createElement("button")
      btn_element.setAttribute("id", continentListAlternative[i])
      btn_element.setAttribute("onclick", "continentInfo('" + continentList[i] + "');")

      div.appendChild(btn_element)
   }

   main_div.appendChild(div)

   // Add world background
   var img_world = document.createElement("img")
   img_world.setAttribute("src", "data/World_Map_2.png")
   img_world.setAttribute("id", "WorldMap")
   main_div.appendChild(img_world)

}

function collapsetest(){
   var showtx = document.getElementById("content")
   var text_element = document.createElement("p")
   

   // Get current list of available merchants
   var today = new Date();
   const currentTime = (today.getHours() + time_offset) + ":30"
   var jsonKeys = Object.keys(windowTime[currentTime])
   // alert(jsonKeys)

   // Populate vendors names
   for(let i = 0; i < jsonKeys.length; i++){
      text_temp = jsonKeys[i] + ": " + Object.keys(windowTime[currentTime][jsonKeys[i]])

      var textnode = document.createTextNode(text_temp)
      text_element.appendChild(textnode)
      showtx.appendChild(text_element)
      text_element.appendChild(document.createElement("br"))
   }

   if(showtx.style.display.length == 0){
      showtx.style.display = "block"

   } else {
      if(showtx.style.display == "block"){
         showtx.style.display = "none"         
         content.innerHTML = ""; // clean UI when hidden
      } else {
         showtx.style.display = "block"
      }
   }

}

function searchItem(){
   const main_div = document.getElementById("MainPage")
   main_div.innerHTML = ""; // clean UI

   var btn_gift = document.createElement("button")
   var btn_card = document.createElement("button")

   var card_list = wholeItemList.filter(items => items.includes("Card"))
   var gift_list = wholeItemList.filter(items => !items.includes("Card"))

 

   function draw_items(item_list){
      for(let i = 0; i < item_list.length; i++){

         //Checkbox
         var chk_cont = document.createElement("div")
   
         var chk_img = document.createElement("img")
         var chk_i = document.createElement("input")
         var chk_i_label = document.createElement("label")
   
         chk_i.setAttribute("type", "checkbox")
         chk_i.setAttribute("id", item_list[i])
         chk_i.setAttribute("class", "chk_values")
         chk_i.setAttribute("name", item_list[i])
         chk_i.setAttribute("value", item_list[i])
         chk_i_label.setAttribute("for", item_list[i])
         chk_i_label.innerText = item_list[i]
   
         var img_source = "data/icon/" + item_list[i] + ".png"
         if(item_list[i].includes("Card")){
            img_source = "data/icon/Card.png"
         }
   
         chk_img.setAttribute("src", img_source)
         chk_img.setAttribute("class", "icon_img")
   
         chk_cont.appendChild(chk_img)
         chk_cont.appendChild(chk_i)
         chk_cont.appendChild(chk_i_label)
         chk_cont.appendChild(document.createElement("br"))
         
         main_div.appendChild(chk_cont)      
      }

   }


   function back_btn(){
      main_div.appendChild(document.createElement("br"))

      var chk_elements = document.getElementsByClassName("chk_values")

      const btn_element = document.createElement("button")
      btn_element.innerHTML = "Back"
      btn_element.addEventListener("click", function(){
         item_chosen = [] // Clear array         
         for(let i = 0; i < chk_elements.length; i++){
            if(chk_elements[i].checked){
               item_chosen.push(chk_elements[i].value)
            }
         }
         
         backBtn()
      })
      main_div.appendChild(btn_element)  
   }


   btn_gift.innerHTML = "Gifts"
   btn_gift.addEventListener("click", function(){
      main_div.innerHTML = ""; // clean UI
      draw_items(gift_list)
      back_btn()
   })

   btn_card.innerHTML = "Cards"
   btn_card.addEventListener("click", function(){
      main_div.innerHTML = ""; // clean UI
      draw_items(card_list)
      back_btn()
   })

   
   main_div.appendChild(btn_gift)  
   main_div.appendChild(btn_card) 
   main_div.appendChild(document.createElement("br"))  
   back_btn()

}


const interval = setInterval(function() {
   saveItems() // Save list of items choosen

   var today = new Date();
   var currentTime = (today.getHours() + time_offset) + ":30"

   var regionKeys = Object.keys(windowTime[currentTime])

   var chosenRegions = []

   for(let i = 0; i < regionKeys.length; i++){
      var vendorList = Object.keys(windowTime[currentTime][regionKeys[i]])      

      for(let y = 0; y < vendorList.length; y++){         
         var itemList = windowTime[currentTime][regionKeys[i]][vendorList[y]]

         for(let x = 0; x < item_chosen.length; x++){
            if(itemList.includes(item_chosen[x])){
               chosenRegions.push(regionKeys[i].replace(/\s/g, ''))
               var reg_edit = document.getElementById(regionKeys[i].replace(/\s/g, '')) // Get continent button id
               if(reg_edit.classList != "chosenmap"){
                  reg_edit.classList.add("chosenmap") // Add class to glow specific region
               }
            }      
         }
      }
   }
   
   
 }, 5000); // In ms


 function chose_merchant(merchant){
   const main_div = document.getElementById("MainPage")
   main_div.innerHTML = ""; // clean UI

    if(typeof merchant == "undefined"){
      main_div.appendChild(document.createTextNode("No vendors at this time"))

      const btn_element = document.createElement("button")
      btn_element.innerHTML = "Back"
      btn_element.addEventListener("click", function(){
         backBtn()
      })
      main_div.appendChild(btn_element)

    }

   


    if(merchant.length != 1){
       for(let i  = 0; i < merchant.length; i++){
         var merchant_btn = document.createElement("button")
         merchant_btn.innerHTML = merchant[i]
         merchant_btn.addEventListener("click", function(){
            merchant_map_img(merchant[i])
         })
       }
    } else {
      merchant_map_img(merchant)
    }


 }

 function merchant_map_img(merchant, current_map = 0){   
   const main_div = document.getElementById("MainPage")
   main_div.innerHTML = ""; // clean UI

   var map_number = parseInt(merchantMap[merchant].length / 2)

   var map_link = merchantMap[merchant][current_map * 2]
   var map_name = merchantMap[merchant][(current_map * 2) + 1]
   
   var div_all = document.createElement("div")
   var map_txt = document.createTextNode(map_name)
   var img_div = document.createElement("img")
   var next_btn = document.createElement("button")

   img_div.setAttribute("class", "innerMap")
   img_div.setAttribute("src", "data/merchant/" + map_link)

   next_btn.innerHTML = "Next"
   next_btn.setAttribute("class", "next_btn")
   next_btn.addEventListener("click", function(){
      div_all.innerHTML = ""; // clean UI
      adder_map(current_map, map_number, merchant)      
   })

   const back_btn = document.createElement("button")
   back_btn.innerHTML = "Back"
   back_btn.addEventListener("click", function(){
      backBtn()
   })

   // Add all to dom
   div_all.appendChild(map_txt)
   div_all.appendChild(img_div)
   div_all.appendChild(next_btn)
   div_all.appendChild(back_btn)
   main_div.appendChild(div_all)
 }

 function adder_map(current_map, map_number, merchant){
   current_map = current_map + 1 // Next map

   if(current_map >= map_number){      
      current_map = 0 // Map number exceeded, return to first one
   }

   merchant_map_img(merchant, current_map) // Allow recursivenes
 }