---
title: Code Block
category: General Inputs
details: |
  Configurable editor for blocks of code or monospace content.
  Displayed for `code_block` and keys ending in `_code_block`.

  Syntax highlighting is enabled when the suffix includes a [language](https://github.com/ajaxorg/ace/tree/v1.2.9/lib/ace/mode) (e.g. `javascript_code_block`).
info: Set a theme, tab size and more for each interface with code block [Options](/editing/options/#code-blocks).
yaml_code_block: |
  ---
  code_block: |
    Some content is better in monospace.

    1 + 1 = 2
    2 + 2 = 4
  javascript_code_block: |
    function sayHello() {
        console.log("Hi there!");
    }

    sayHello();
  example_ruby_code_block: |
    def say_hello
      puts 'Hi there!'
    end

    say_hello
  ---
image_paths:
  - /images/editing/front-matter/code-block.png
---
