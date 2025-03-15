---
layout: Doc.liquid
---

# Wander

*This document is in the process of being rewritten, so parts are incorrect.*

*This document assumes you are familiar with [Ligature's data model](/docs/ligature/).*

Wander is a scripting language for working with Ligature's data model.
It is a very simple programming language that is missing many features most languages possess.
It is based on ideas from functional programming languages.
Its main features are allowing users to easily write out Ligature Networks and use commands on them to query and transform them.

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
Slot(string)
PatternTriple = (Term | Slot, Term | Slot, Term | Literal | Slot)
Pattern = Set<PatternTriple>
Value = Literal | Element
Quote = '[' Any* ']'
Map = '{' + ??? + '}'
FnCall = Term Any*
Block = '(' + ??? + ')'
Any = Term | Quote | Map | Literal | Variable | Slot | Block
Expression = FnCall | Any
Script = Expression*
```
