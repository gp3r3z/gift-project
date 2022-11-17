import { appState } from "../AppState.js"


export class Gift {
    constructor(data) {
        this.tag = data.tag || ''
        this.url = data.url
        this.opened = data.opened
        this._id = data._id
    }

    get ListTemplate() {

        if (this.opened == true) {

            return `
                <div class="col-4 bg-danger text-center">
                    <img src="${this.url}" class="img-fluid" />
                    <h5 class="text-white text-center">
                        ${this.tag}
                    </h5>
                    </div>
            
        `      } else {
            return `
            <div
              class="col-4 d-flex flex-column justify-content-around align-content-center" onclick="app.giftsController.openGift('${this._id}')"
            >
              <h4 class="bg-white p-5 rounded text-center ">
                Open me<br />soon
              </h4>
            </div>
            
            
            `
        }


    }
}