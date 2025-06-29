---
layout: Doc.liquid
---

# Introduction

**Note: this page is an incomplete draft, major sections are missing**

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
Below is a summary of the API.

| Name            | Arguments                      | Result          | Description                                                                |
| --------------- | ------------------------------ | --------------- | -------------------------------------------------------------------------- |
| KBs             | ()                             | Set<Name>       | Get all of the names of the knowledge bases in this store.                 |
| AddKB           | Name                           | ()              | Add a new KB with the given name.                                          |
| RemoveDB        | Name                           | ()              | Remove the KB with the given name.                                         |
| Assert          | Name, Assertions               | ()              | Add the following Assertions to the KB with the given name.                |
| Unassert        | Name, Assertions               | ()              | Remove the following Assertions from the KB with the given name.           |
| ReadAsserts     | Name                           | Assertions      | Read all the Assertions from the KB with the given name.                   |
| Define          | Name, Definitions              | ()              | Add the following Definitions to the KB with the given name.               |
| Undefine        | Name, Definitions              | ()              | Remove the following Definitions from the KB with the given name.          |
| ReadDefinitions | Name                           | Definitions     | Read all the Assertions from the KB with the given name.                   |
| ReadKB          | Name                           | KnowledgeBase   | Read the Definitions and Assertions in the KB with the given name.         |
| IsConsistent    | Name                           | bool            | Is the KB with the given name consistent?                                  |
| IsSatisfiable   | Name, ConceptExpr              | bool            | Is the given concept expression satisfiable in the KB with the given name? |
| IsInstance      | Name, Instance, ConceptExpr    | bool            | Is the given instance an instance of the given concept expression?         |
| IsSubsumedBy    | Name, ConceptExpr, ConceptExpr | bool            | Is the first concept expression subsumed by the second concept expression? |
| IsEquivalent    | Name, ConceptExpr, ConceptExpr | bool            | Is the first concept expression is equivalent to the second?               |
| Query           | Name, ConceptExpr              | Set<Instance>   | Find all instances of the given concept expression.                        |
| TableauModels   | Name                           | Set<Assertions> | Find all the models for a given KB using the tableau algorithm.            |
