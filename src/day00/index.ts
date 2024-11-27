import { Effect as E } from "effect";

export default E.gen(function* () {
    return yield* E.succeed(42);
});
