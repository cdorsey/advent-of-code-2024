import { Effect as E, Logger } from "effect";

import { readInput } from "@/day01/common.ts";
import _part1 from "@/day01/part1.ts";
import part2 from "@/day01/part2.ts";

await part2.pipe(
  E.tap(E.logInfo),
).pipe(
  E.provide(readInput("src/day01/input.txt")),
  E.provide(Logger.pretty),
  E.runPromiseExit,
);
