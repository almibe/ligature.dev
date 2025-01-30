---
layout: Doc.liquid
---

# Ligature's Data Model

Ligature tries to have a minimal data model.
Below is psudeocode for Ligature's data model.

```
Element(string)
Literal(string)
NetworkName(string)
Variable(string)
Value = Literal | Element | NetworkName | Quote
Triple = { element: Element | Variable, attribute: Element | Variable, value: Value | Variable }
Network = Set<Triple>
Any = Network | Value
Quote = [ Any ]
```

### Elements

An element in Ligature is an object or idea you are describing.
Elements are used to refer to a concept, role, or element in Ligature.
Elements are named by a string of characters.
See [Wander's documentation](/docs/wander/) for specifics.

### Literals

Literals represent literal values.
You cannot make triples about literal values, like you can with Elements.

### Variables

Variables are used as slots for creating networks that can be used as patterns for queries.

### Triples

A Triple is a triple made up of an Element being described, an Element representing the Attribute name, and the Value for that Attribute.
Any of these parts can also be a variable to support operations for queries and transformations.

### Network

A Network in Ligature is a collection of entries made up of instances of Triples.
