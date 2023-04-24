const database = {
    fish: [
        {
            name: "Bob",
            image: "https://images3.ratemyfishtank.com/article/500x500/0/202/3915_6.jpg",
            species: "Freshwater angelfish",
            length: 7,
            location: "South America",
            food: "crustaceans"
        },
        {
            name: "Joe",
            image: "https://pacificfishdepot.com/wp-content/uploads/2022/05/black-arowana-fish-1482312574-2651168.jpeg",
            species: "Black arowana",
            length: 12,
            location: "Tropical south America",
            food: "shrimp, crickets"
        },
        {
            name: "Billy",
            image: "https://fishesofaustralia.net.au/images/image/ScleropagesJardiniNeilArmstrong.jpg",
            species: "Scleropages jardinii",
            length: 8,
            location: "Gulf of Carpentaria",
            food: "insects, small fish"
        },
        {
            name: "Jill",
            image: "https://preview.free3d.com/img/2019/04/2174905181567714794/w2pyk706.jpg",
            species: "Southern saratoga",
            length: 18,
            location: "Mary rivers",
            food: "fishes,frogs"
        },
        {
            name: "Bonny",
            image: "https://www.fishkeepingworld.com/wp-content/uploads/2019/11/Red-Arowana-Care-Guide-A-Fishkeepers-Crown-Jewel-Banner.jpg",
            species: "Asian arowana",
            length: 16,
            location: "Amazon floodplains",
            food: "crustaceans, small fish"
        }
    ],
    FishTips: [
        {li: "Properly condition your water"},
        {li:"Acclimate your fish to the water"},
        {li:"Float fish in their bag"},
        {li:"Maintain pH balance and other chemical levels"},
        {li:"Make sure Water temperature is right"},
        {li:"Change water regularly"},
        {li:"Clean tank glass and other structures"},
        {li:"Choose the right size for your tank"}
    ],
}
export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}
export const GetTips = () => {
    return database.FishTips.map(FishTips => ({...FishTips}))
}

// fish details include/ image, species, length, name, location, what it eats.