import { appState } from "../AppState.js";
import { vmService } from "../Services/VMService.js";

export class VMController {

  constructor() {
    this.drawSnacks()
  }

  updateSnack(name, bought) {
    vmService.updateSnack(name, bought)
    this.drawSnacks()
  }


  drawSnacks() {
    let snacks = appState.snacks
    let template = ''
    snacks.forEach(snack => {
      template += `
    <div class="col-md-6">
          <h3>${snack.name}</h3>
          <h3>$${snack.price}</h3>
          <h3> You're buying ${snack.bought}</h3>
          <h3> There are ${snack.stock} left</h3>
          <button onclick="app.vMController.updateSnack('${snack.name}')">+</button>
        </div>`
    })
    document.getElementById('snacks').innerHTML = template
  }
}