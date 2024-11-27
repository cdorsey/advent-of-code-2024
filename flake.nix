{
  description = "Advent of Code solutions for 2024";

  inputs = {
    nixpkgs.url = "nixpkgs/nixos-unstable-small";

    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs =
    {
      nixpkgs,
      flake-utils,
      ...
    }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in
      {
        devShells.default = pkgs.mkShell {
          packages = with pkgs; [
            deno
          ];

          NODE_ENV = "development";
        };
      }
    );
}
