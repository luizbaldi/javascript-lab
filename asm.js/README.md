# asm.js

Basically asm.js lets us convert C++ in JavaScript using [emscripten](https://github.com/emscripten-core/emscripten) and this is fuckin awesome.

This example is simply a Fibonacci algorithm written in `./fibonacci.cpp`, and the output is `a.out.js`.

## Why

I've found `asm.js` studying about C++ and JavaScript and decided to put this simple example just to show how amazing this is :)

## Installation

To prepare the environment you can basically follow the instructions from the [emscripten instructions](https://emscripten.org/docs/getting_started/downloads.html).

After that, run:

```
./emcc -O1 -s ASM_JS=1 ./fibonacci.cpp
```

And to see the output in node:

```
node ./a.out.js
```

_______
