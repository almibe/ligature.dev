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
Extends = { element: Element, concept: Element }
NotExtends = { element: Element, concept: Element }
Attribute = { element: Element, attribute: Element, value: Value }
Entry = Extends | NotExtends | Attribute
Network = Set<Entry>
Pattern = { element: Element | Variable, attribute: Element | Variable, value: Value | Variable }
PatternNetwork = Set<Pattern>
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

### Concepts

Concepts represent sets of Elements.

### Extends and NotExtends

Extensions allow you to say that an individual element extends a concept, both represented by symbols.
Examples could be that a car extends Vechicle or 0249250940183 extends AccountNumber.
NonExtensions allow you to note that an individual does not extends a concept.
NonExtensions are useful when doing reasoning tasks to find clashes.

### Attributes

An Attribute is a triple made up of an Element being described, an Element representing the Attribute name, and the Value for that Attribute.

### Network

A Network in Ligature is a collection of entries made up of instances of Extends, NotExtends, and Attributes statements.
