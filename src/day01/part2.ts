import { Chunk, Effect as E } from "effect";

import { Input } from "@/day01/common.ts";

export default E.gen(function* () {
  const { left, right } = yield* Input;
  const occurances = Chunk.map(
    left,
    (n1) => Chunk.filter(right, (n2) => n2 === n1).pipe(Chunk.size),
  );

  return left.pipe(
    Chunk.zip(occurances),
    Chunk.map(([n1, n2]) => n1 * n2),
    Chunk.reduce(0, (acc, cur) => acc + cur),
  );
});
