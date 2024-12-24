---
layout: Doc.liquid
---

# Ligature's Data Model

Ligature tries to have a minimal data model.
Below is psudeocode for Ligature's data model.

```
Element(string)
Literal(string)
Variable(string)
Value = Literal | Element
Statement = { element: Element | Variable, attribute: Element | Variable, value: Value | Variable }
Network = Set<Statement>
```

### Elements

An element in Ligature is an object or idea you are describing.
Elements are used to refer to a concept, role, or element in Ligature.
Elements are named by a string of characters.
See [Wander's documentation](/docs/wander/) for specifics.

### Literals

Literals represent literal values.
You cannot make statements about literal values, like you can with Elements.

### Variables

Variables are values that can represent other values.

### Statements

A Statement is a triple made up of an Element being described, an Element representing the Attribute name, and the Value for that Attribute.
Any of these parts can also be a variable to support operations for queries and transformations.

### Network

A Network in Ligature is a collection of entries made up of instances of Statements.
