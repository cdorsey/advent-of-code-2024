import { Chunk, Effect as E } from "effect";

import { Input } from "@/day02/common.ts";

export default E.gen(function* () {
  const input = yield* Input;

  const mapDiffToPrevious = (chunk: Chunk.Chunk<number>) =>
    Chunk.mapAccum(
      chunk,
      0,
      (prev, curr) => [curr, curr - prev],
    )[1].pipe(Chunk.tail);

  const reportIsSafe = (chunk: Chunk.Chunk<number>) => {
    const allDecreasing = Chunk.every(chunk, (n) => n >= 0);
    const allIncreasing = Chunk.every(chunk, (n) => n <= 0);

    if (!(allDecreasing || allIncreasing)) {
      return false;
    }

    return Chunk.every(
      chunk,
      (n) => Math.abs(n) >= 1 && Math.abs(n) <= 3,
    );
  };

  const [_, safeReports] = input.pipe(
    Chunk.map(mapDiffToPrevious),
    Chunk.compact,
    Chunk.partition(reportIsSafe),
  );

  return safeReports.length;
});
