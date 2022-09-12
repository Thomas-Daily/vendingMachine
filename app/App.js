import { VMController } from "./Controllers/VMController.js";

class App {
  vMController = new VMController();
}

window["app"] = new App();
