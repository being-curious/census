# Census
Curious to know how many 'Third Party Modules' are in https://deno.land/x?

Use Census to get this info.

## Getting started

```ts
import { countModulesInDenoLandX } from "https://deno.land/x/census/mod.ts";

console.log(await countModulesInDenoLandX()); // 549
```

### CLI

Alternatively, you can use it directly from the CLI:

```bash
deno run --allow-net https://deno.land/x/census/cli.ts
```

You can also install it globally using the following:

```bash
deno install --allow-net -n census https://deno.land/x/census/cli.ts
```

Then, the package is available to run:

```bash
census
```

### Configuration

Required permissions:

1. `--allow-net`


## Note

Total third party modules in https://deno.land/x :

Date Time | Count
------------ | -------------
12:55 pm, Monday, 1 June 2020 (IST) | 549
