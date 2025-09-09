---
layout: Doc.liquid
---

*This document is in the process of being written, so expect missing and incomplete parts.*

# Ligature's API

Below is a summary of the API.

| Name              | Arguments                      | Result          | Description                                                                |
| ----------------- | ------------------------------ | --------------- | -------------------------------------------------------------------------- |
| `KBs`             | ()                             | Set<Name>       | Get all of the names of the knowledge bases in this store.                 |
| `AddKB`           | Name                           | ()              | Add a new KB with the given name.                                          |
| `RemoveDB`        | Name                           | ()              | Remove the KB with the given name.                                         |
| `Assert`          | Name, Assertions               | ()              | Add the following Assertions to the KB with the given name.                |
| `Unassert`        | Name, Assertions               | ()              | Remove the following Assertions from the KB with the given name.           |
| `ReadAsserts`     | Name                           | Assertions      | Read all the Assertions from the KB with the given name.                   |
| `Define`          | Name, Definitions              | ()              | Add the following Definitions to the KB with the given name.               |
| `Undefine`        | Name, Definitions              | ()              | Remove the following Definitions from the KB with the given name.          |
| `ReadDefinitions` | Name                           | Definitions     | Read all the Assertions from the KB with the given name.                   |
| `ReadKB`          | Name                           | KnowledgeBase   | Read the Definitions and Assertions in the KB with the given name.         |
| `IsConsistent`    | Name                           | bool            | Is the KB with the given name consistent?                                  |
| `IsSatisfiable`   | Name, ConceptExpr              | bool            | Is the given concept expression satisfiable in the KB with the given name? |
| `IsInstance`      | Name, Instance, ConceptExpr    | bool            | Is the given instance an instance of the given concept expression?         |
| `IsSubsumedBy`    | Name, ConceptExpr, ConceptExpr | bool            | Is the first concept expression subsumed by the second concept expression? |
| `IsEquivalent`    | Name, ConceptExpr, ConceptExpr | bool            | Is the first concept expression is equivalent to the second?               |
| `Query`           | Name, ConceptExpr              | `Set<Instance>`   | Find all instances of the given concept expression.                        |
| `TableauModels`   | Name                           | `Set<Assertions>` | Find all the models for a given KB using the tableau algorithm.            |
