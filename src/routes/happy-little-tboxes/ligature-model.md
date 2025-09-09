---
layout: Doc.liquid
---

*This document is in the process of being written, so expect missing and incomplete parts.*

# Ligature's Data Model

Below is a pseudocode representation of Ligature's data model.

```
Namespace(string)
LanguageTag(string)
Element(string, Optional<Namespace>, Optional<LanguageTag>)
Role(string)

Assertion = 
    | Triple(Element, Role, Element) 
    | Instance(Element, ConceptExpression)

ConceptExpression = 
    | AtomicConcept(string)
    | Top 
    | Bottom 
    | And(List<ConceptExpression>)
    | Or(List<ConceptExpression>)
    | All(Role, Option<ConceptExpression>)
    | Exists(Role, Option<ConceptExpression>)
    | Not(ConceptExpression)
    | Func(Role)

Definition = 
    | Implies(ConceptExpression, ConceptExpression)
    | Equivalent(ConceptExpression, ConceptExpression)

KnowledgeBase(Set<Definition>, Set<Assertion>)
```

## Element

An individual element of a domain that is being described.
You can describe an element by making assertions involving the element.
Below each type of assertion is explained.

### Instance

Elements can belong to sets known as concepts.
We'll explain concepts further below.
Below we are stating that a potato is a Vegetable.

```wander
instance(potato Vegetable)
```

### Triple

Triples use a role to connect two elements.
Triples are directed from one element to another.

For example we can use the `knows` role to connect `alice` and `betty`.

```
alice knows betty
```

or expressed in our pseudocode above

```
Triple(Element("alice", None, None) Role("knows") Element("betty", None, None))
```

in Wander

```wander
triple(alice knows betty)
```

## Concepts

Concepts are sets of elements.
Examples could be the species of an animal or a tag used in a blog.
As shown above you can say that elements are instances of concepts.

## Concept Expressions

Ligature allows you to represent complex concepts with concept expresssions.
Below I will explain each type of concept expression and how they can be combined.

### Top and Bottom Concepts

There are two concepts built into Ligature, the top and bottom concepts.
The top concept represents all elements in a system and the bottom concept is empty.

### Conjunction

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
Element(
    Element("betty", None, None),
    AtomicConcept("CarnivorousPlant"))
```

in Wander 

```wander
equivalent(CarnivorousPlant and(Carnivore Plant))
```

Here we are saying the concept `CarnivorousPlant` is equivalent to the combination of being a `Carnivore` and being a `Plant`.
We then say that `betty` is a `CarnivorousPlant`.

### Disjunction

### Universal

### Existential

### Negation

