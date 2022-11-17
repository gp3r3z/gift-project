import { appState } from "../AppState.js"
import { giftsService } from "../Services/GiftsService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from '../Utils/Writer.js'




function _drawGifts() {
    console.log('%cLOG: ', 'color:green;', 'Drawing gifts')
    let template = ''

    appState.gifts.forEach(gift => template += gift.ListTemplate)
    setHTML('gift-area', template)

    // console.log('%cLOG: ', 'color:green;', template)



}

export class GiftsController {
    constructor() {
        console.log('%cLOG: ', 'color:green;', 'Gift Controller connected')
        this.getGifts()
        appState.on('gifts', _drawGifts)
        // setInterval(this.getGifts, 500)
    }
    async getGifts() {
        try {
            await giftsService.getGifts()
        } catch (error) {
            Pop.error(error.message)
            console.error(error.message)
        }
    }
    async openGift(id) {
        debugger
        try { await giftsService.openGift(id) }
        catch (error) { Pop.error(error.message) }

    }
}

