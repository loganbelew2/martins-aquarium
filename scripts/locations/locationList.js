import { getFish } from "../database.js";


export const locationHtml = () => {
    const locationList = getFish()
   let HtmlString = `<article class="locationList"><h1>My locations</h1>`
    for (const location of locationList) {
    HtmlString += `<li class="location"> ${location.location}</li>`
    }
    HtmlString +=  `</article>`
return HtmlString
}