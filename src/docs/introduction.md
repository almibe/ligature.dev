---
layout: Doc.liquid
---

# Introduction

*Note: this page is an incomplete draft, major sections are missing*

Ligature is a data model and api created for knowledge representation.
It is based on ideas from Description Logic (DL) which studies a family of logic-based knowledge represenation languages called description logics.

## Data Model Basics

Ligature models data in a collections called knowledge bases.
Each knowledge base contains two inner collections, definitions and assertions.
Definitions define concepts used in the domain.
Assertions define relationships between instances of the concepts defined.

As an example take the following statements (the odd capitalization is on purpose).

```
Cats are Animals.
betty is a Cat.
betty's sibling is don.
```

In formal notation from Description Logic

```
Cat ⊑ Animal
betty: Cat
(betty, don): sibling
```

In Wander notation, Wander is a scripting language developed alongside Ligature to provide a concrete syntax.

```
definitions(implies(Cat Animal))
assertions((instance betty Cat) [betty sibling don])
```

In this example we have two concepts `Cat` and `Animal`, note concept names are usually written in `PascalCase`.
We also have two instances `betty` and `don`.
And we have a single role `sibling`.
Instance and role names tend to be written in `kebap-case`.

This example also shows three different types of relationships.
 * The relationship between two concepts, being a Cat implies being an Animal.
 * The relationship between an instance and a concept, betty is a Cat.
 * The relationship between two instances described by a role, betty has a sibling role that don fulfills.

Later we'll expand on this simple model.

## API Basics

Description Logic focuses on a base set of reasoning problems related to answering questions involving its data model.
Ligature expresses these as a common API that can be provided by implementations.
The details of the API are covered later, but for now we'll cover the reasoning tasks at a high level.

The most general question we can ask about a knowledge base is if it is internally consistent.
The example given above is consistent.
However, if we added the assertion that betty is not an Animal, we would now have an inconsistent knowledge base.
This is becuase we also state that all Cats are Animals so we end up saying that betty both is and is not an Animal.

We can also ask questions about relationships in the knowledge base.
Specifically, we can ask questions like 

 * If different concepts are equivalent or subsumed by one another
   * Are all mammals also animals?
   * Are cat and feline equivalent?
 * If a given instance belongs to a given concept definition.
   * Is france and Country?
 * Is it possible for a instance of a concept to exist or is this concept unsatisfiable?

Now that we've introduced the basics of Ligature's data model and what types of reasoning tasks Ligature can perform with regards to this model.
