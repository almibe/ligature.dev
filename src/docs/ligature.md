---
layout: Doc.liquid
---

# Ligature's Data Model

Ligature tries to have a minimal data model.
Currently, Ligature only has a handful of data types that are supported.
Below is psudeocode for Ligature's data model.

```
Element(string)
ConceptName = Element
RoleName = Element
Extension = { element: Element, concept: ConceptName }
NonExtension = { element: Element, concept: ConceptName }
Role = { first: Element, second: Element, role: RoleName }
Entry = Extension | NonExtension | Role
Network = Set<Entry>
```

### Elements

An element in Ligature is an object or idea you are describing.
Elements are used to refer to a concept, role, or element in Ligature.
Elements are named by a string of characters.
See [Wander's documentation](/docs/wander/) for specifics.

### Concepts

Concepts represent sets of elements.

### Extensions and NonExtensions

Extensions allow you to say that an individual element extends a concept, both represented by symbols.
Examples could be that a car extends Vechicle or 0249250940183 extends AccountNumber.
NonExtensions allow you to note that an individual does not extends a concept.
NonExtensions are useful when doing reasoning tasks to find clashes.

### Roles

A Role is a triple made up of an ordered pair of elements and a Role name, all three of which are represented by an symbol.

### Network

A Network in Ligature is a collection of Extensions, NonExtensions, and Roles.
