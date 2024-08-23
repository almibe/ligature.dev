---
layout: Main.liquid
---

# Ligature's Data Model

Ligature tries to have a minimal data model.
Currently, Ligature only has a handful of data types that are supported.
Below is psudeocode for Ligature's data model.

```
Value =
    | Name(string)
    | Path(Array<Name>)
    | Slot(string)
    | String(string)
    | Int(bigint)
    | Bytes(Array<u8>)
    | Pipeline(Array<Pipeline | Path | Network>)
    | Network = { statements: Set<Statement> }
Statement = { entity: Identifier | Slot, attribute: Identifier | Slot, value: Value }
```

### Statement

A Statement is a triple made up of an Entity, an Attribute, and a Value.
Both the Entity and Attribute are represented by either a Name or a Slot.
A Value can be either an Name, Slot, or a Literal.

### Names

Names are used to refer to a concept or object in Ligature.
There are two types of Names in Ligature, regular and IRI-compatible.
Regular names must match the following regex

```regexp
^[a-zA-Z_=:][a-zA-Z_0-9]*$
```

IRI compatiable names allow more characters but must be wrapped in back ticks ``` `` ```.
They exist so that URLs and other more complicated names can be used and allow all of the characters
that are valid in IRIs to be used (https://www.ietf.org/rfc/rfc3987.txt).
Note IRI compatible names are only concerned with the characters used and do not require you to follow
the IRI spec, for example \`5\` is a valid IRI compatible name but not a valid regular name.
Below is the regular expression that expresses what a valid Identifier character.

```regexp
^[a-zA-Z0-9-._~:/?#\[\]@!$&'()*+,;%=\x{00A0}-\x{D7FF}\x{F900}-\x{FDCF}\x{FDF0}-\x{FFEF}\x{10000}-\x{1FFFD}
\x{20000}-\x{2FFFD}\x{30000}-\x{3FFFD}\x{40000}-\x{4FFFD}\x{50000}-\x{5FFFD}\x{60000}-\x{6FFFD}
\x{70000}-\x{7FFFD}\x{80000}-\x{8FFFD}\x{90000}-\x{9FFFD}\x{A0000}-\x{AFFFD}\x{B0000}-\x{BFFFD}
\x{C0000}-\x{CFFFD}\x{D0000}-\x{DFFFD}\x{E1000}-\x{EFFFD}]+$
```

### Slots

Slots act as place holders in Networks.
When a Network contains a Slot it can also be called a Pattern.
Slots are used by Ligature's core functions to perform queries and transformations.
These are covered in the combinators section.
When written out slots are regular names that start with a $

```regexp
^\$[a-zA-Z_][a-zA-Z_0-9]*$
```

### Entity

An Entity is something we can make Statements about.
It is represented by a Name or a Slot.
An Entity by itself is not very interesting,
and we know nothing meaningful about an Entity by itself except for its Name.
We can only know things about Entities based on the Statements that exist that describe that Entity.

### Attribute

An Attribute is a named relationship between an Entity and a Value.
It can be represented by a Name or a Slot.

### Value

A Value can be either a Name, Slot, or Literal.

### Literals

Literals in Ligature represent an immutable value.
Several types are currently supported with the possibility to add more.

#### String Literal

A UTF-8 encoded string.
When written as a literal Ligature strings follow the same rules as JSON strings.

```
"Hello,\nWorld!"
```

#### Integer Literal

An unsized, signed integer.
This is called a BigInt in most programming languages.

```
921830918
0
-2424255
```

#### Bytes Literal

An array of bytes.
When written out use base-64 and wrap in backticks with a prefix base64.

```
base64`aGVsbG8=`
```

### Network

A Network in Ligature is a collection of Statements.
When written out wrap a network in braces `{}` and separate Statements with a comma.

```
{}

{a b c}

{a b c, d e 6}
```

