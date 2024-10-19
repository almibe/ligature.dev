---
layout: Doc.liquid
---

# Combinators

## `union`

Combine two Networks.

```wander
a {a b c}
b {d e f}
(union a b)
```

## `minus`

Remove all Triples in the right Network from the left.

```wander
a {a b c, d e f}
b {d e f, g h i}
(minus a b)
```

## `apply`

Apply is the first function that treats Slots in Networks differently than other values.
Apply takes three arguments.
The first is the Network that acts as a pattern and the second is an associative array holding values and the final is where the result is merged.

```wander

```

## `educe`

Educe draws out values from a Network using a Pattern.
It acts like the opposite of apply and will find all occurances of the Pattern.


```wander
educe {`a` `b` `c`} {$a $b $c} 
```

## `query`

Queries allow you to search a network and then transform the results of your query and merge them into a result network.

```
@source { a b c, d b c }
@template { res = $a }
@query { $a b c }
@ { src = @source, dest = @r, template = @template, query = @query } query
@r
```

This example results in

```
{ res = a, res = d }
```

## `infer`
