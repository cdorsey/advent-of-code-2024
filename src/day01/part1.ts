import { Chunk, Effect as E, Order } from "effect";
import { Input } from "@/day01/common.ts";

export default E.gen(function* () {
  const { left, right } = yield* Input;

  return left.pipe(
    Chunk.sort(Order.number),
    Chunk.zip(right.pipe(Chunk.sort(Order.number))),
    Chunk.map(([a, b]) => Math.abs(a - b)),
    Chunk.reduce(0, (acc, cur) => acc + cur),
  );
});
