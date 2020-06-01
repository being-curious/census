const DATABASE_URL =
  "https://raw.githubusercontent.com/denoland/deno_website2/master/database.json";

let database: string[] = [];

/** Check how many modules at deno.land/x */
export async function checkHowManyModulesAtDenoLandX() {
  if (!database.length) {
    database = Object.keys(await (await fetch(DATABASE_URL)).json());
  }
  return database.length;
}
