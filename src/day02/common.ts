import { Chunk, Context, Effect as E, Layer } from "effect";

export class Input extends Context.Tag("day02/Input")<
  Input,
  Chunk.Chunk<Chunk.Chunk<number>>
>() {}

export const readInput = (path: string) =>
  Layer.effect(
    Input,
    E.promise(() => Deno.readFile(path)).pipe(
      E.map((buf) => new TextDecoder().decode(buf)),
      E.map((text) =>
        Chunk.fromIterable(text.split("\n")).pipe(
          Chunk.filter((line) => line.length > 0),
          Chunk.map((line) =>
            Chunk.fromIterable(line.split(/\s+/).map((n) => parseInt(n)))
          ),
        )
      ),
    ),
  );
