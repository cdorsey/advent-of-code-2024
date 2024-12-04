import { Context, Effect as E, Layer } from "effect";

export class Input extends Context.Tag("day03/Input")<Input, string>() {}

export const readInput = (path: string) =>
  Layer.effect(Input, E.promise(() => Deno.readTextFile(path)));
