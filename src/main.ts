import { Effect as E, Logger } from "effect";

import { readInput } from "@/day02/common.ts";
import _part1 from "@/day02/part1.ts";
import part2 from "@/day02/part2.ts";

await part2.pipe(
  E.tap(E.logInfo),
).pipe(
  E.provide(readInput("src/day02/input.txt")),
  E.provide(Logger.pretty),
  E.runPromiseExit,
);
