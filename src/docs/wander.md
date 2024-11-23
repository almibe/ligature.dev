---
layout: Doc.liquid
---

# Wander

* This document is in the process of being rewritten, so parts are incorrect. *

* This document assumes you are familiar with [Ligature's data model](/docs/ligature/). *

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
Below is pseudocode of Wander's syntax.

```
Element = string
Entry = Element Element Element
NetworkLiteral = '{' (Entry ( ',' Entry )* ','?)? '}'
Argument = Element | NetworkLiteral | Quote
Quote = '(' (Argument | ',')* ')'
Call = Element Argument*
Script = (Call ( ',' Call )* ','?)?
```

## How Interpretation Works

When you run a Wander script each call is interpreted separately and in the order it is recieved.

### Command Calls

Calls in Wander are made up of a command name (an element) and its arguments.
Calls can be separated by commas.

```
function-name arg1 arg2,
function-name arg1 { a b c } (inner-call { another : network })
```
