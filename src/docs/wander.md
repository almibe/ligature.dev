---
layout: Doc.liquid
---

# Wander

*This document is in the process of being rewritten, so parts are incorrect.*

*This document assumes you are familiar with [Ligature's data model](/docs/ligature/).*

Wander is a scripting language for working with Ligature's data model.
It is a very simple programming language that is missing many features most languages possess.
It takes inspiration from several programming paradigms including functional programming,
logic programming, and declarative programming.
Its main features are allowing users to easily write out Ligature Networks and use commands on them to query and transform them.

## Status

Work on Wander is still in early days.
Expect changes and some differences between this document and implementations for the time being.

## Model

A Wander script is made up of a list of commands.

## Command Calls

Calls in Wander are made up of a command name (an element) and its arguments.
Calls can be separated by commas.

```wander
network.union {a b c} {d e f},
```

## Assignments

Assignment statements allow you to assign a value to a variable that can be used later.

```wander
?test = { a b c },
network.union ?test {d e f}
```

## Pipes

Putting a `|` in the arguments to a call allows you to chain calls together.
The following calls are equivalent.

```wander
network.union {a b c} {d e f} | network.count
```

```wander
network.count (network.union {a b c} {d e f})
```

You can chain any number of statements together as long as the last argument of the next command is the output of the previous.

```wander
import core,
import network,
import tinydl,

union {betty : Cat} {anna : Dog}
| infer {Cat subconcept-of Mammal, Dog subconcept-of Mammal, Mammal subconcept-of Animal}
| filter { ?who : Animal }
| count
```

## Syntax

Below is incomplete pseudocode of Wander's syntax.

```
Element = ???
Literal = '"' + ??? '"'
Variable = '?' + ???
Value = Literal | Element
Statement = (Element | Variable) ws+ (Element | Variable) ws+ (Value | Variable)
Network = '{' WanderStatement ( ',' WanderStatement )* ','? '}'
Pipe = '|'
Quote = '(' (Argument | ',')* ')'
Argument = Element | Network | Quote | Literal | Variable | Pipe
Call = Element Argument*
Assignment = Variable '=' (Argument | Call)
WanderStatement = Assignment | Call
Script = (WanderStatement ( ',' WanderStatement )* ','?)?
```
