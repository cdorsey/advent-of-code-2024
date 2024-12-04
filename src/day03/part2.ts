import { Chunk, Effect as E } from "effect";
import { Input } from "@/day03/common.ts";

export default E.gen(function* () {
  const input = yield* Input;

  return Chunk.fromIterable(
    input.matchAll(/((mul)\((\d{1,3}),(\d{1,3})\)|(do)\(\)|(don't)\(\))/gm),
  ).pipe(
    Chunk.mapAccum(true, (state, matches) => {
      if (matches[5] === "do") {
        return [true, 0];
      }

      if (matches[6] === "don't") {
        return [false, 0];
      }

      if (state) {
        return [state, parseInt(matches[3]) * parseInt(matches[4])];
      }

      return [state, 0];
    }),
  )[1].pipe(
    Chunk.reduce(0, (acc, cur) => acc + cur),
  );
});
