---
layout: ../layouts/Main.astro
title: Comparing Ligature to RDF
---
# Comparing Ligature to RDF

Ligature without a doubt takes a very large amount of inspiration from RDF.
In fact for a while Ligature was going to be another RDF implementation.
The project started life as a Turtle parser called [Stinkpot](https://en.wikipedia.org/wiki/Sternotherus_odoratus).
However, as I worked on this project I found that there were features of RDF I didn't want to implement and features I felt were missing from RDF that I wanted to add.
In the end I decided that there are enough RDF implementations already and I should focus on implementing the ideas I found interesting.
In this document I will go over the most important differences (and some cosmetic ones) between Ligature and RDF.
For reference RDF's specification can be found on the [w3c website](),
and the in progress specification for Ligature can be found on [github](https://github.com/almibe/ligature-specification).

## Naming and Data Model

I'll start with a slightly cosmetic change just to clear up any confusion when I mention things by name later in the document.
Both Ligature and RDF are based on Statements with three parts (usually called a Triple).
RDF uses a naming scheme that follows parts of human language: Subject, Predicate, and Object.
Ligature uses terminology that is probably more familiar to software developers: Entity, Attribute, and Value.
Conceptually these are very similar in purpose but the underlying data models are different in subtle (and not so subtle) ways.
I'll go into this deeper in different parts of this document but the basics of what each part of each data model are shown below

## RDF's Data Model

| Subject    | Predicate | Object     | Named Graph |
| ---------- | --------- | ---------- | ----------- |
| IRI        | IRI       | IRI        | IRI         |
| Blank Node |           | Blank Node | Blank Node  |
|            |           | Literal    |             |

## Ligature's Data Model

| Entity | Attribute | Value   | Context |
| ------ | --------- | ------- | ------- |
| Entity | Attribute | Entity  | Entity  |
|        |           | Literal |         |

## Blank Nodes

One of the main differences between Ligature and RDF is that in Ligature everything has a clear name.
In RDF a Subject can either be an IRI or a Blank Node in Ligature an Entity can only be a named Entity.

## Reification

Reification is basically the ability to make Statements about Statements.
Examples of why this is useful includes time-stamping the creation date of a Statement, citing who added the Statement/the source of the Statement,
or even stating which Statement another Statement supersedes.
RDF mentions reification in the specification doc (ADD LINK), but it doesn't really have first class support for reification.
Ligature on the other hand uses Contexts to aid with reification.
A Context is a unique (for the given Dataset) Entity that identifies a given Statement.

## Not Using IRIs

RDF uses IRIs to represent Subjects, Predicates, Objects, and Named Graphs.
I don't think that many other systems use IRIs and even in RDF I think most people just use URLs or URIs
(URNs aren't used very often but I suspect they are used more than IRIs).
Granted URLs, URIs, and URNs *ARE* IRIs but I mean that the specific features of IRIs, namely using characters that aren't valid in URLs or URIs,
aren't used often since URL encoding is a standard practice.

Ligature doesn't use IRIs for two reasons.
First, as mentioned URL encoding is pretty standard.
Second, I feel that using IRIs makes working with local Datasets challenging.
By local Datasets I mean Datasets that will never be shared as linked data.
Crafting a valid IRI for an Entity that will only exist on my local machine seems a bit overkill to me.
If I'm tracking pet records for example just using my pet's name is fine for an identifier in my opinion.

## Far Fewer Literal Types

RDF supports an infinite number of literal types.
Ligature currently supports four.
There's more nuance here that I'll add later.

## Supporting a Custom Scripting Language Compared to Using a Query Language or Using an Existing Language (Like JavaScript)

