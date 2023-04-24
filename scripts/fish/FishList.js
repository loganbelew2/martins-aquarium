
import { getFish } from "../database.js"

export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    // Start building a string filled with HTML syntax
    let htmlString = ``

    // Create HTNL representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fishCard">
            <div><img  class="fish__image" src="${fish.image}"></div>
            <div class="fish__name"><b>Name:</b>${fish.name}</div>
            <div class="fish__species"><b>species:</b>${fish.species}</div>
            <div class="fish__length"><b>size:</b>${fish.length}in.</div>
            <div class="fish__location"><b>location harvested:</b>${fish.location}</div>
            <div class="fish__diet"><b>food:</B>${fish.food}</div>
        </section>
`
    }
    htmlString += ``

    return htmlString
}
export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (fish of fishes) {
        if (fish.length % 3 ===0) {
            holyFish.push(fish)
        }
    }

    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
   const soldierArr = []
    for (const fish of fishes) {
    if (fish.length %5 === 0) {
        soldierArr.push(fish)
    }
   }
    return soldierArr
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const nonHolyArr = []
    for (const fish of fishes) {
        if (fish.length % 3 !=0 && fish.length %5 !=o) {
            nonHolyArr.push(fish)
        }
    }
    return nonHolyArr
}