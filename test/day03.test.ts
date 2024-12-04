import { assertEquals } from "@std/assert";
import { Effect as E } from "effect";

import part1 from "@/day03/part1.ts";
import part2 from "@/day03/part2.ts";
import { Input } from "@/day03/common.ts";
import { Layer } from "effect";

Deno.test("part 1", () => {
  const InputTest = Layer.succeed(
    Input,
    Input.of(
      String
        .raw`xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`,
    ),
  );

  assertEquals(part1.pipe(E.provide(InputTest), E.runSync), 161);
});

Deno.test("part 2", () => {
  const InputTest = Layer.succeed(
    Input,
    Input.of(
      String
        .raw`xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))`,
    ),
  );

  assertEquals(part2.pipe(E.provide(InputTest), E.runSync), 48);
});
