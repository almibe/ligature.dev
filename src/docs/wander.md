---
layout: Doc.liquid
---

# Wander

*This document is in the process of being rewritten, so parts are incorrect.*

*This document assumes you are familiar with [Ligature's data model](/docs/ligature/).*

Wander is a scripting language for working with Ligature's data model.
It is a very simple programming language that is missing many features most languages possess.
It is based on concatenative stack-based languages like Forth and Joy.
Its main features are allowing users to easily write out Ligature Networks and use commands on them to query and transform them.

## Status

Work on Wander is still in early days.
Expect changes and some differences between this document and implementations for the time being.

## Syntax

Below is incomplete pseudocode of Wander's syntax.

```
Element = ???
Literal = '"' + ??? '"'
Variable = '?' + ???
NetworkName = '*' + ???
Value = Literal | Element | NetworkName | Quote
Triple = (Element | Variable) ws+ (Element | Variable) ws+ (Value | Variable)
Network = '{' Triple ( ',' Triple )* ','? '}'
Quote = '[' Any* ']'
Any = Element | NetworkName |Network | Quote | Literal | Variable
Script = Any*
```

## Runtime

Wander has a specialized runtime made up of a couple of parts.

### Host Actions

Host Actions are actions that are defined in the host language and exposed to the runtime.
You can use Host Actions to build up applications and define additional Actions.

### The Stack

Wander is a stack-based programming language like Forth or Joy.
A Wander script is a list of terms.
Any term that isn't an Element is put on the stack.
Elements represent Action calls and they invoke an Action.
Actions return a transformation of the stack, usually removing a couple of terms to do a calculation and putting the result on the top of the stack.
For example the following script would just put an empty network on top of the stack.

```wander
{}
```

Stack:

| Top of Stack |
| ------------ |
| {}           |

While this script will put a simple network on the stack and then invoke the count Action.
The count Action will remove the term at the top of the stack if it is a Network and replace it with a literal that contains the count of that Network.

```wander
{a b c, a d e} count
```

Stack:

| Top of Stack |
| ------------ |
| "2"          |

If we put two networks on the stack before we call count there will still be a Network on the stack since only one will be removed by the call to count.

```wander
{a b c, a d e} {} count
```

Stack:

| Top of Stack   |
| -------------- |
| "0"            |
| {a b c, a d e} |

### Named Networks

The last part of the runtime is a collection of Named Networks.
A Network Name is a term that starts with a `*`.
`*` is also a valid Network Name and it is treated specially.
There are actions like `merge` that will let you add a Network to a Named Network to store values.

After running this script

```
{} {a b c} *example merge
```

Stack:

| Top of Stack   |
| -------------- |
| {}             |

You can see that merge took 2 terms and left the empty Network.
Now there is a Named Network with the name `*example` and contains the value `{a b c}`.
Using the `read` Action will copy the contents of a Named Network back on the Stack.

```
{}
{a b c} *example merge 
*example read
```

Stack:

| Top of Stack   |
| -------------- |
| {a b c}        |
| {}             |

There are many Actions that manipulate the Stack and Named Networks.
And you can construct ones as well as we'll explore next.

## Defining Actions

Use defined Actions are stored in the `*` Network.
You add them using Actions like `merge` as you can see in this example.

```
{test action-def [ {a b c} ]} * merge
test
```

Stack:

| Top of Stack   |
| -------------- |
| {a b c}        |

Here we define an action called `test`.
We use the Role `action-def` to define an action.
The Value in the Triple should be a Quote, in this case it just contains a Network literal.
When we invoke the Action the Network literal will be placed on the stack.
