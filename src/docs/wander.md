---
layout: Doc.liquid
---

# Wander

* This document is in the process of being rewritten, so parts are incorrect. *

* This document assumes you are familiar with [Ligature's data model](/docs/ligature/). *

Wander is a scripting language for working with Ligature's data model.
It is a very simple programming language that is missing many features most languages possess.
It takes inspiration from several programming paradigms including concatentive programming, functional programming,
logic programming, and declarative programming.
Its main features are allowing users to easily write out Ligature Networks and use Combinators on them to query and transform data.

## Status

Work on Wander is still in early days.
Expect changes and some differences between this document and implementations for the time being.

## Model

A Wander script is made up of a list of statements.
There are two types of statement.
The first is a network literal and the second is a function call.

```
Argument = symbol | network-literal | FunctionCall
AppendNetwork = symbol network-literal
FunctionCall = '(' symbol Argument* ')'
Term = AppendNetwork | FunctionCall
Script = Term*
```

## How Interpretation Works

When you run a Wander script each term is interpreted separately and in the order it is recieved.

### Append Network

Calls to append to a network are made up of a symbol representing the network's name followed by the network that should be
merged with the existing network if it already exists or is the value of the newly created network.

### Function Calls

Function calls in Wander use S-Expression syntax.

```
(function-name arg1 arg2)

(function-name arg1 { a b c } (inner-call { another : network}))
```
