---
layout: Doc.liquid
---

*This document is in the process of being written, so expect missing and incomplete parts.*

# Ligature's Data Model

```
LanguageTag(string)
Namespace(string)
Individual(string, Optional<Namespace>, Optional<LanguageTag>)
Role(string)

Assertion = 
    | Triple(Individual, Role, Individual) 
    | Instance(Individual, Concept)
    | Same(Individual, Individual)
    | Different(Individual, Individual)

Concept = 
    | AtomicConcept(string)
    | TopConcept 
    | BottomConcept 
    | AndConcept(List<Concept>)
    | OrConcept(List<Concept>)
    | AllConcept(Role, Option<Concept>)
    | ExistsConcept(Role, Option<Concept>)
    | NotConcept(Concept)

Definition = 
    | Implies(Concept, Concept)
    | Equivalent(Concept, Concept)

KnowledgeBase(Set<Definition>, Set<Assertion>)
```

## Individual

An individual element being described.

## Role

Used to connect two individuals.
Roles are directed from one individual to another.
We refer to these statements as triples.

Given the triple

`alice knows bob`

or expressed in our pseudo-code above

`Triple(Individual("alice", None, None) Role("knows") Individual("bob", None, None))`

`alice` and `bob` are indviduals and `knows` is a role that connects them.

## Concepts

Concepts are sets of individuals.
Examples could be the species of an animal or a tag used in a blog.

## Instance

To say that an individual belongs to a concept we say that the individual is an instance of that concept.

`betty is a Cat`

or

`Instance(Individual("betty", None, None), AtomicConcept("Cat"))`

The individual `betty` belongs to the concept `Cat`.

## Concept Expressions

Ligature allows you to represent complex concepts with concept expresssions.
Using logical operators you can define complex concepts like this.

In slightly more formal notation

```
CarnivorousPlant ≡ Carnivore ⊓ Plant
betty : CarnivorousPlant
```

translated into pseudo-code

```
Equivalent(
    AtomicConcept("CarnivorousPlant"), 
    AndConcept([
        AtomicConcept("Carnivore"), 
        AtomicConcept("Plant")]))
Instance(
    Individual("betty", None, None),
    AtomicConcept("CarnivorousPlant"))
```

Here we are saying the concept CarnivorousPlant is equivalent to the combination of being a Carnivore and being a Plant.
We then say that betty is a CarnivorousPlant.