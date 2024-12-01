import { Chunk, Context, Data, Effect as E, Layer } from "effect";

export class Input extends Context.Tag("day01/Input")<Input, {
  left: Chunk.Chunk<number>;
  right: Chunk.Chunk<number>;
}>() {}

export const readInput = (fileName: string) =>
  Layer.effect(
    Input,
    E.promise(() => Deno.readFile(fileName)).pipe(
      E.map((buf) => new TextDecoder().decode(buf)),
      E.map((text) =>
        Chunk.fromIterable(text.split("\n")).pipe(
          Chunk.filter((line) => line.length > 0),
          Chunk.map((line) => line.split(/\s+/)),
          Chunk.map(
            ([left, right]) => Data.tuple(parseInt(left), parseInt(right)),
          ),
          Chunk.unzip,
        )
      ),
      E.map(([left, right]) => Input.of({ left, right })),
    ),
  );
