---
layout: Doc.liquid
---

# Wander

*This document is in the process of being rewritten, so parts are incorrect.*

*This document assumes you are familiar with [Ligature's data model](/docs/ligature/).*

Wander is a scripting language for working with Ligature's data model.
It is a very simple programming language that is missing many features most languages possess.
It is based on ideas from functional programming languages including Lisps and the ML-family.

## Status

Work on Wander is still in early days.
Expect changes and some differences between this document and implementations for the time being.

## Syntax

Below is incomplete pseudocode of Wander's syntax.

```
Term = ???
Literal = '"' + ??? '"'
Variable = '$' + ???
Slot = '?' + ???
Tuple = '[' Any* ']'
Record = '{' + (Term Any)* + '}'
Application = '(' + Term + Any* + ')'
Any = Term | Tuple | Record | Literal | Variable | Slot | Application
Script = Any*
```
