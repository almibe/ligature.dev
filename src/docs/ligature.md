---
layout: Doc.liquid
---

# Ligature's Data Model

Ligature tries to have a minimal data model.
Below is psudeocode for Ligature's data model.

```
Term(string)
Literal(string)
Triple = (Term, Term, Term | Literal)
Network = Set<Triple>
```

Ligature has a triple-based data model.
A Triple is made up of three parts.
A collection of related Triples is called a Network.
Triples are used to represent relationships between Inviduals, Concepts, and Literals.
An Individual is represented by a Term and represents something you want to model in your system.
A Concept is a set of Individuals, and Individual can explicitly or implicity belong to or not belong to a Concept.

## Terms

Terms are used to refer to a Concept, Role, or Individual in Ligature.
Terms are named by a string of characters.
Terms can be made up of any character that is valid in a URL.

## Literals

Literals are represented by a string of characters.
They are used to represent concrete values.
You cannot make a statement about a Literal like you can an Invidual.
