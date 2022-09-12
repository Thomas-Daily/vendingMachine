import { appState } from "../AppState.js";


class VMService {
  updateSnack(name) {
    let snack = appState.snacks.find(snack => snack.name == name)
    if (snack.stock > 0) {
      snack.bought++
      snack.stock--
    }


  }
}

export const vmService = new VMService 