import { Chunk, Effect as E, Option } from "effect";

import { Input } from "@/day02/common.ts";

export default E.gen(function* () {
  const input = yield* Input;

  const mapDiffToPrevious = (chunk: Chunk.Chunk<number>) => {
    return Chunk.mapAccum(
      chunk,
      0,
      (prev, curr) => [curr, curr - prev],
    )[1].pipe(Chunk.tail);
  };

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

  const problemDampener = (chunk: Chunk.Chunk<number>) =>
    Chunk.map(
      chunk,
      (_, i) =>
        Chunk.filterMap(
          chunk,
          (n, j) => (j === i ? Option.none() : Option.some(n)),
        ),
    );

  const [_, safeReports] = input.pipe(
    Chunk.map(problemDampener),
    Chunk.map(Chunk.map(mapDiffToPrevious)),
    Chunk.map(Chunk.compact),
    Chunk.partition(Chunk.some(reportIsSafe)),
  );

  return safeReports.length;
});
