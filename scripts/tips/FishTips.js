import { GetTips } from "../database.js";

export const TipsList = () => {
    const Tips = GetTips()

    let htmlString = '<ul class="TipsHtml"><h2>Fish care tips.</h2>'

    // Create HTNL representations of each fish here
    for (const Tip of Tips) {
        htmlString += `
            <li class="TipHtml">${Tip.li}</li> `

    }
    htmlString += `</ul>`

    return htmlString
}