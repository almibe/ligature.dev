# Ligature's Data Model

Ligature tries to have a minimal data model.
Currently, Ligature only has a handful of data types that are supported.
Below is psudeocode for Ligature's data model.

```
Value =
    | Identifier(string)
    | Slot(string)
    | NetworkName(string)
    | String(string)
    | Int(bigint)
    | Bytes(Array[u8])
    | Pipeline(Array[Value])
    | Network = { triples: Set[Triple] }
Statement = { entity: Identifier | Slot, attribute: Identifier | Slot, value: Value }
```

### Identifiers

Identifiers are used to refer to a concept or object in Ligature.
Currently, a valid Identifier is a string that starts with either an underscore or a character from a-z or A-Z or 0-9,
and is followed any number of characters that are valid in IRIs (https://www.ietf.org/rfc/rfc3987.txt).
Below is the regular expression that expresses what a valid Identifier is.

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

### Entity

An Entity is something we can make Statements about.
An Entity by itself is not very interesting,
and we know nothing meaningful about an Entity by itself except for its Identifier.
We can only know things about Entities based on the Statements that exist that describe that Entity.

### Attribute

An Attribute is a named relationship between an Entity and a Value.

### Value

A Value can be either a Literal or an Entity.

### Literals

Literals in Ligature represent an immutable value.
Several types are currently supported with the possibility to add more.

#### String Literal

A UTF-8 encoded string.

#### Integer Literal

An unsized, signed integer.
This is called a BigInt in most programming languages.

#### Bytes Literal

An array of bytes.

### Statement

A Statement is a triple made up of an Entity, an Attribute, and a Value.
Both the Entity and Attribute are represented by an Identifier.
A Value can be either an Identifier or a Literal.

### Network

A Network in Ligature is a collection of Statements.
