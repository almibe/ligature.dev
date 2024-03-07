# Identifiers in Ligature

## Introduction

Identifiers in Ligature are strings of characters usually wrapped in angle brackets to denote them as Identifiers.

`<hello>`

Identifiers in Ligature are used to refer to things and concepts within Ligature graphs.
So a person, the fact that a person is a person, and a person having a name can all be represented with Identifiers.

```
<alex> <isa> <person>
<person> <hasa> <name>
<alex> <name> "Alex"
```

They can be thought of as potentially filling the role of URLs, database row Ids, column and row tuples in spreadsheets, or something like [keywords in Clojure](https://clojure.org/reference/data_structures#Keywords).

The character repotoire for Identifiers in Ligature is all characters that are valid in IRIs.
This means that all valid IRIs are Identifiers but also things that aren't valid IRIs, but that only
contain characters allowed in IRIs are also valid Identifiers in Ligature.
Here's a regex that validates an Identifier if you are the type of person into that kind of thing.

```regex
^[a-zA-Z0-9-._~:/?#\[\]@!$&'()*+,;%=\x{00A0}-\x{D7FF}\x{F900}-\x{FDCF}\x{FDF0}-\x{FFEF}\x{10000}-\x{1FFFD}\x{20000}-\x{2FFFD}\x{30000}-\x{3FFFD}\x{40000}-\x{4FFFD}\x{50000}-\x{5FFFD}\x{60000}-\x{6FFFD}\x{70000}-\x{7FFFD}\x{80000}-\x{8FFFD}\x{90000}-\x{9FFFD}\x{A0000}-\x{AFFFD}\x{B0000}-\x{BFFFD}\x{C0000}-\x{CFFFD}\x{D0000}-\x{DFFFD}\x{E1000}-\x{EFFFD}]+$
```

This brings out one of the key distinctions between RDF and Ligature.
If you are working with the semantic web then IRIs are fitting since you want things to be uniquely identified across the web.
If you are interested in Knowledge Graphs more generally, I view using IRIs as a hurdle since it forces you to have to create IRIs for things that don't need to be uniquely identified across the web.
For example, if I'm only interested in my pets' medical records `<juniper>` is a fine Identifier.
I have one cat named Juniper, I don't plan on reusing that name, and I don't plan on publishing my pets' medical records as linked data.
If I eventually want to combine my pet records and tea recipes `<pet:juniper>` and `<ingredient:juniper>` are easy changes to make.
This can be thought of as a YAGNI approach to linked data.
Start simple and add namespaces and schemes as they are needed, and if you have a URL to start with, just use that.

## Naming and Templates

One issue that could be seen with this as I have discussed so far is that all Identifiers need to be given meaningful names when you refer to them.
To solve this, when an Identifier is created, a template can be given instead of a name and a new name will be created using that template.
A template is a string that is a valid Identifier (or empty) that also contains a pair of curly braces `{}`.
Where the curly braces are will be replaced by a generated id.
Common schemes for generating ids could be UUIDs, ULIDs, or incrementing atomic counters.
How IDs are generated depends on the implementation.
Below are all examples of templates.

```
<{}>
<{}!>
<test:{}>
<https://github.com/{}/{}>
```
