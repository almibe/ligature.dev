---
layout: Main.liquid
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
An Element can be a Network, a Quote, or a Path.
When a script is ran each Element in the list is evaluated.

This is the model for Ligature given earlier:

```
Value =
    | Name(string)
    | Slot(string)
    | NetworkName(string)
    | String(string)
    | Int(bigint)
    | Bytes(Array<u8>)
    | Pipeline(Array<Pipeline | Name | Network>)
Statement = { entity: Name | Slot, attribute: Name | Slot, value: Value }
Network = Set<Statement>
```

Wander can be viewed as an expansion of this model:

```
Element =
    | Value.Network
    | Value.Name
    | Value.NetworkName
    | Value.Pipeline
Script = Array[Element]
```

## How Interpretation Works

When you run a Wander script each Element is interpreted separately and in the order it is recieved.
When each element is ran you can think of it as being implicitly passed a Network and returning a Network.
If you run multiple Elements then the output Network of one Element is passed as the input of the next.
Below I will go over how each of the three types of Elements is interpreted.

### Networks

Networks are the easiest.
The Network you are interpreting is simply unioned with the Network that is passed implicitly to it and the result is returned.

```
{a b c}
{d e f}
{}
{a a a, d e f, z z z}
```

If the code above was ran as a Wander script it would interpret three different Networks.
Assuming the initial Network was empty, you would end with {a a a, a b c, d e f, z z z}.

### Names

When the interpreter is given a Name the working state is checked to see if it contains that value,
and if it does not exist there the instance's combinators are checked to see if one matches.

### Network Names

When the interpreter is given a Network Name the working state's network is switched to the one given.
If it doesn't exist an empty Network is created.

### Quotes

When a quote is ran a copy of the working state is made and it is used when making calls.
This allows you to make calls with arguments without polluting your working state.
It also allows you to build more complicated chains of calls and name them so they can be used later.

```
{ a b c } [ {d e f} ]
```

