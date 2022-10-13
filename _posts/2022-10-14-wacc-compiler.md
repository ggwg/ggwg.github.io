---
layout: post
title: WACC Programming Language + Compiler
subtitle: A Drift-Racing Game with 1st and 3rd Person Functionality
categories: markdown
tags: VR Unity Oculus
---

This project is an optimized compiler for our own programming language specification, with advanced
  features like importing libraries, method overloading, higher-order functions and exception handling.
  
The compiler was written entirely from scratch by me and 3 other students as part of the Compilers course
  at Imperial College London. Our compilation process involves 3 main phases: Parsing and Lexical Analysis,
  which is all about deconstructing the input language into an abstract syntax tree; Semantic Analysis,
  which handles the error checking to ensure the program is actually valid; and Code Generation, which
  is all about converting the nodes of the abstract syntax tree into executable ARM11 assembly code.
  
The project was really successful, and not only did we end up learning so much about Compilers, but we
  also created completely from scratch our own new programming language capable of handling some pretty
  advanced programming features like imports, method overloading and higher-order functions.

# Example Program

```
begin
  import io_lib # Import pretty array print functions from external library
  
  # Returns a capitalised version of c if b is true and c is a letter
  char conditionalToUpper(char c, bool b) is
    if (b == true && c >= 'a' && c <= 'z') then
      return chr (ord c - 32)
    else
      return c
    fi
  end
  
  # Applies f pairwise between chars and bools, and stores the result in res
  void zipWith(func(char,char,bool) f, char[] res, char[] chars, bool[] bools) is
    for (int i = 0;; i = i + 1) do
      try
        res[i] = call f(chars[i], bools[i]); # Apply f
        continueloop # Continue to the beginning of the loop
      catch
        println "i exceeded array bounds"; # We enter this when we exit the array bounds
        break # We exit the loop
      end;
      # Situated after a continueloop and break, these lines should never execute
      println "This should never be reached";
      exit -1
    done
  end
  
  # Main
  char[] chars = ['A', 'b', 'C', 'd'];
  bool[] bools = [true, true, false, false];
  char[] res = [' ', ' ', ' ', ' '];
  
  # Capitalises characters in chars if the bools flag is set to true
  call zipWith(conditionalToUpper, res, chars, bools);
  call prettyPrint(res)
end
```

[Github link](https://github.com/ggwg/wacc-compiler)
