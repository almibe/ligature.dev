# Wander

* This document is in the process of being rewritten, so parts are incorrect. *

This document assumes you are familiar with Ligature's data model.

Wander is a scripting language for working with Ligature's data model.
It is a very simple programming language that is missing many features most languages possess.
It takes inspiration from several programming paradigms including concatentive programming, functional programming,
logic programming, and declarative programming.
Its main features are allowing users to easily write out Ligature Networks and calls functions on them to query and transform.
While Wander's focus is on working with Ligature it can be used as a general purpose scripting language as well.

## Status

Work on Wander is still in early days.
Expect changes and some differences between this document and implementations for the time being.

## Goals of Wander

 - be a small (no keywords, no user defined types or functions*) and easy to learn language
 - make heavy use of iterators (no manual loops), composition, and pattern matching to solve problems
 - be easy to implement and also provide tooling for

* Note: You can't define functions in Wander, but you can define functions in a host language and expose them to Wander.

## Basics

A Wander script is made up of a list of Elements.
An Element can be a Literal, a Quote, a Word, or a MetaElement.
Two examples of MetaElements are Comments and Definitions.

## Writing Literals

Most literals in Ligature are written out how they would be in similar formats.
Strings follow the rules of JSON.
Numbers are written out like Integers in most programming languages.
Identifiers are wrapped in back ticks.

```wander
1
"Hello,\nworld!"
`https://ligature.dev`
```

Bytes don't have a literal, I'll talk about them later in the section marked `Function Calls`.

## Writing Networks

Network literals define a set of Triples that are treated as a collection.

```wander
{
  `a` `b` `c`,
  `b` `c` `d`
}
```

TODO: mention Value lists and Entity expansions.

## Comments

Comments in Ligature are marked by starting with `--` and being wrapped in parenthesis.

```wander
24601 (-- what does this even mean?)
```

## Definition

A Definition assigns a Quote to a Word using the `=` operator and wrapping it in parenthesis.

```wander
( new-word = [ 1 2 3 Int.sum ] )
```

## Identifier Concatenation

One of the benefits of having variables is being able to reuse parts of an identifier.

```wander
base = `https://github.com/almibe/ligature-specification/`,
file = `README.md`,
-- all of the lines below result in the same Identifier
base:file,
base:"README.md",
base:`README.md`,
```

## Literal Types

 * Int - a signed, unbound Integer value, similar to a BigInt in most programming langauge
  * 0
  * -20
 * String - a UTF-8 string, that follows the encoding definition of a JSON string
  * "Hello"
  * "Hello\tWorld\n"
 * Identifier - Identifiers are wrapped in back ticks, just like in Ligature
  * \`hello\`
  * \`https://ligature.dev\`
 * Quotes
  * [1, 2, "Hello"]
 * Associative Arrays
  * [ x = 5, y = "Hello" ]
 * Networks
  * { \`a\` \`b\` \`c\`, \`five\` \`=\` 5 }

## Quotes

Quotes are a list of 

```wander
[1, 2, 3],              -- A Sequence of Integers
[`a`, `b`, `c`],        -- A Sequence of Identifiers
[`a` `b` `c`],          -- A Sequence of Triples, no commas between Identifiers
[],                     -- An empty Array
[[1], [], [45 -23]],    -- An Array of Arrays of Integers
```

## Words

Words in Wander are used for variable names in scripts.
A valid Word identifier starts with a-z, A-Z, or _ and then includes zero of more characters from the same set or numbers.

```regex
[a-zA-Z_][a-zA-Z0-9_]*(.[a-zA-Z_][a-zA-Z0-9_]*)*
```

## Associative Arrays

Associative Arrays are a data structure that holds key-value pairs where the key is a Name and the value is any valid Ligature Value (Int, Bool, String, Slot, Identifier).
They are wrapped in square brackets and look like a series of bindings.

```wander
[ digit = 5, text = "five" ]
```

## Expressions

Everything in Wander can be viewed as an expression.
By expression I mean they result in a value.

## Currying



## Pipe Operator

Often you want to use the result of one expression inside of another expression.

```
(or false (not(not(true)))) -- true
```

Some people (myself included) find reading code like this difficult.
To help with this languages like Wander provide an alternative syntax for calling functions
that encourages thinking about a pipeline of transformations.
In Wander this is done with the `|` or pipe operator.

Below are two examples of calling a function normally and then using the pipe operator.

```wander
-- examples with single argument function
not true, -- false
true.not, -- false

-- examples with multiple argument function
or false true, -- true
false.or true, -- true
```

This can be expanded to change calls.
Below is the same expression written on one line and broken up into multiple lines.

```
true.not.not.or false, -- true

true
  .not
  .not
  .or false,           -- true

```

I personally find the last example easier to read and edit than the initial example I started this section with.
