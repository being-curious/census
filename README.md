# Census

Check how many modules at deno.land/x

## Getting started

```ts
import { checkHowManyModulesAtDenoLandX } from "https://deno.land/x/census/mod.ts";

console.log(await checkHowManyModulesAtDenoLandX()); // 531
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
