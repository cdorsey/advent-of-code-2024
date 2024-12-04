import { Effect as E, Logger } from "effect";
import { parseArgs } from "@std/cli";

const args = parseArgs(Deno.args, {
  string: ["day", "part"],
});

const day = `day${args.day?.padStart(2, "0")}`;
const part = `part${args.part}`;

const { default: program } = await import(
  `@/${day}/${part}.ts`
);

const { readInput } = await import(`@/${day}/common.ts`);

await program.pipe(
  E.tap(E.logInfo),
).pipe(
  E.provide(readInput(`src/${day}/input.txt`)),
  E.provide(Logger.pretty),
  E.runPromiseExit,
);
