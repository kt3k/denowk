# denowk

> Awk like command line utility, you can run JavaScript for each line of input.

# Usage

Install:

```bash
deno install -qf https://deno.land/x/denowk@v0.1.0/cli.ts
```

This installs the command `denowk`.

`denowk` reads the input and executets the give javascript for each line of input, like the command `awk`.

```bash
cat some-text.txt | denowk 'console.log($2)'
```

The above command prints out the 2nd column of the input `some-text.txt`.


# License

MIT
