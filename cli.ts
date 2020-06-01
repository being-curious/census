import {
  checkHowManyModulesAtDenoLandX,
} from "./mod.ts";

async function cli() {
  console.log(await checkHowManyModulesAtDenoLandX());
}

cli();
