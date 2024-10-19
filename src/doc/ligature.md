---
layout: Doc.liquid
---

# Ligature's Data Model

Ligature tries to have a minimal data model.
Currently, Ligature only has a handful of data types that are supported.
Below is psudeocode for Ligature's data model.

```
Symbol(string)
Extension = { element: Symbol, concept: Symbol }
NonExtension = { element: Symnol, concept: Symbol }
Role = { first: Symbol, second: Symbol, role: Symbol }
Entry = Extension | NonExtension | Role
Network = Set<Entry>
```

### Symbols

Symbols are used to refer to a concept or object in Ligature.
Currently a valid Symbol is a string of characters that are valid in IRIs (https://www.ietf.org/rfc/rfc3987.txt).
Below is the regular expression that expresses what a valid Symbol is.

```regexp
^[a-zA-Z0-9-._~:/?#\[\]@!$&'()*+,;%=\x{00A0}-\x{D7FF}\x{F900}-\x{FDCF}\x{FDF0}-\x{FFEF}\x{10000}-\x{1FFFD}
\x{20000}-\x{2FFFD}\x{30000}-\x{3FFFD}\x{40000}-\x{4FFFD}\x{50000}-\x{5FFFD}\x{60000}-\x{6FFFD}
\x{70000}-\x{7FFFD}\x{80000}-\x{8FFFD}\x{90000}-\x{9FFFD}\x{A0000}-\x{AFFFD}\x{B0000}-\x{BFFFD}
\x{C0000}-\x{CFFFD}\x{D0000}-\x{DFFFD}\x{E1000}-\x{EFFFD}]+$
```

### Extensions and NonExtensions

Extensions allow you to say that an individual extends a concept, both represented by Symbols.
Examples could be that a car extends Vechicle or 0249250940183 extends Account.
NonExtensions allow you to note that an individual does not extends a concept.
NonExtensions are useful when doing reasoning tasks to find clashes.

### Roles

A Role is a triple made up of an ordered pair of Elements and a Role name, all three of which are represented by an Symbol.

### Network

A Network in Ligature is a collection of Extensions, NonExtensions, and Roles.
