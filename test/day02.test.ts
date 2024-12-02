import { assertEquals } from "@std/assert";
import { Chunk, Effect as E, Layer } from "effect";

import { Input } from "@/day02/common.ts";
import part1 from "@/day02/part1.ts";
import part2 from "@/day02/part2.ts";

const InputTest = Layer.succeed(
  Input,
  Input.of(Chunk.make(
    Chunk.make(7, 6, 4, 2, 1),
    Chunk.make(1, 2, 7, 8, 9),
    Chunk.make(9, 7, 6, 2, 1),
    Chunk.make(1, 3, 2, 4, 5),
    Chunk.make(8, 6, 4, 4, 1),
    Chunk.make(1, 3, 6, 7, 9),
  )),
);

Deno.test("part1", () => {
  assertEquals(part1.pipe(E.provide(InputTest), E.runSync), 2);
});

Deno.test("part2", () => {
  assertEquals(part2.pipe(E.provide(InputTest), E.runSync), 4);
});
