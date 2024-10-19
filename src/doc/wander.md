---
layout: Doc.liquid
---

# Wander

* This document is in the process of being rewritten, so parts are incorrect. *

* This document assumes you are familiar with Ligature's data model. *

Wander is a scripting language for working with Ligature's data model.
It is a very simple programming language that is missing many features most languages possess.
It takes inspiration from several programming paradigms including concatentive programming, functional programming,
logic programming, and declarative programming.
Its main features are allowing users to easily write out Ligature Networks and use Combinators on them to query and transform data.
While Wander's focus is on working with Ligature it can be used as a general purpose scripting language as well (it really isn't ready for that yet though).

## Status

Work on Wander is still in early days.
Expect changes and some differences between this document and implementations for the time being.

## Model

A Wander script is made up of a list of Elements.
A Element can be a Network, a Quote, or a Path.
When a script is ran each Element in the list is evaluated.

This is the model for Ligature given earlier:

```
Identifier =
    | Symbol(string)
    | Slot(string)
Statement = { entity: Identifier, attribute: Identifier, value: Identifier }
Network = Set<Statement>
```

Wander can be viewed as an expansion of this model:

```
Element =
    | Value.Symbol Value.Network
    | Quote(Array<Value>)
    | Expression(Array<Value>)
Script = Array<Element>
```

## How Interpretation Works

When you run a Wander script each Element is interpreted separately and in the order it is recieved.
When each Element is ran you can think of it as being implicitly passed the store instance and returning a single value.
If you run multiple Elements then the output Network of one Element is passed as the input of the next.
Below I will go over how each of the three types of Elements is interpreted.

### Networks

The Network you are interpreting is simply unioned with the Network that is passed implicitly to it and the result is returned.

```
{a b c}
{d e f}
{}
{a a a, d e f, z z z}
```

If the code above was ran as a Wander script it would interpret four different Networks.
Assuming the initial Network was empty, you would end with `{a a a, a b c, d e f, z z z}`.

### Expression

When a Expression is interpreted i