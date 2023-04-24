// Import the FishList function from the correct module
import { FishList } from "./fish/FishList.js"
import { locationHtml } from "./locations/locationList.js"
import { TipsList } from "./tips/FishTips.js"
const tip = TipsList()
const loc = locationHtml()
/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const parentHTMLElement = document.querySelector(".FishListHtml")


parentHTMLElement.innerHTML = FishList()

const TipsHtmlElement = document.querySelector(".TipsListHtml")

TipsHtmlElement.innerHTML = tip

const locationsHtmlElement = document.querySelector(".LocationListHtml")

locationsHtmlElement.innerHTML = loc