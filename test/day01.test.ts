import { assertEquals } from "@std/assert";
import { Chunk, Effect as E, Layer } from "effect";

import { Input } from "@/day01/common.ts";
import part1 from "@/day01/part1.ts";
import part2 from "@/day01/part2.ts";

const InputTest = Layer.succeed(
  Input,
  Input.of({
    left: Chunk.make(3, 4, 2, 1, 3, 3),
    right: Chunk.make(4, 3, 5, 3, 9, 3),
  }),
);

Deno.test("part1", () => {
  assertEquals(part1.pipe(E.provide(InputTest), E.runSync), 11);
});

Deno.test("part2", () => {
  assertEquals(part2.pipe(E.provide(InputTest), E.runSync), 31);
});
