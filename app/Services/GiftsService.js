import { appState } from '../AppState.js'
import { Gift } from '../Models/Gift.js'
import { sandboxGiftApi } from '../Services/AxiosService.js'
import { Pop } from '../Utils/Pop.js'


class GiftsService {

    async getGifts() {
        try {
            const res = await sandboxGiftApi.get()
            console.log('%cLOG: ', 'color:yellow;', res.data)
            appState.gifts = res.data.map(gift => new Gift(gift))

            console.log('%cLOG: ', 'color:yellow;', appState.gifts)
        } catch (error) {
            Pop.error(error.message)
        }
    }
    async openGift(id) {
        debugger
        let openGift = appState.gifts.find(gift => gift._id == id)
        openGift.opened = true
        let index = appState.gifts.findIndex(g => g._id == id)
        const res = await sandboxGiftApi.put(`/${id}`, openGift)

        console.log('%cLOG: ', 'color:yellow;', '\n', openGift)

        let newGift = new Gift(res.data)
        console.log('%cLOG: ', 'color:yellow;', newGift)

        appState.gifts.splice(index, 1, new Gift(res.data))


        // console.log('%cLOG: ', 'color:yellow;', index)


        appState.emit('gifts')



    }


}


export const giftsService = new GiftsService()