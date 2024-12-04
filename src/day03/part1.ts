import { Chunk, Effect as E } from "effect";
import { Input } from "@/day03/common.ts";

export default E.gen(function* () {
  const input = yield* Input;

  return Chunk.fromIterable(
    input.matchAll(/mul\((\d{1,3}),(\d{1,3})\)/gm),
  ).pipe(
    Chunk.map(([_, left, right]) => parseInt(left) * parseInt(right)),
    Chunk.reduce(0, (acc, cur) => acc + cur),
  );
});
