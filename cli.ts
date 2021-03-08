import { readLines } from "https://deno.land/std@0.89.0/io/bufio.ts";

function usage() {
  console.log(`
Usage: denowk <javascript_string>

  Reads input and runs the given javascript for each line.

  Input is splitted by whitespaces and stored in variables $1, $2, etc. The entire string is available as $0.

Example:

  cat input.txt | denowk 'console.log($2)'

  The above prints out the 2nd column of the input.txt
  `);
}

const cmd = Deno.args[0];

if (!cmd) {
  usage();
  Deno.exit(1);
}

if (Deno.isatty(Deno.stdin.rid)) {
  console.log("Error: Stdin is not piped");
  Deno.exit(1);
}

for await (const line of readLines(Deno.stdin)) {
  const m = line.match(/(\S*)\s*(\S*)\s*(\S*)\s*(\S*)\s*(\S*)\s*(\S*)\s*(\S*)\s*(\S*)\s*(\S*)/);
  const g = globalThis as any;
  g.$0 = m?.[0];
  g.$1 = m?.[1];
  g.$2 = m?.[2];
  g.$3 = m?.[3];
  g.$4 = m?.[4];
  g.$5 = m?.[5];
  g.$6 = m?.[6];
  g.$7 = m?.[7];
  g.$8 = m?.[8];
  g.$9 = m?.[9];
  eval(cmd);
}
