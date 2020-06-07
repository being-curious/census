import { countModulesInDenoLandX } from "./mod.ts";

async function cli() {
  console.log(
    "Total third party modules in https://deno.land/x : %d",
    await countModulesInDenoLandX()
  );
}

cli();
