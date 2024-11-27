import { assertEquals } from "@std/assert";
import { Effect as E } from "effect";

import program from "@/day00/index.ts";

Deno.test("runs", () => {
    assertEquals(E.runSync(program), 42);
});
