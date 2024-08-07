# Functions

## `count`

Count will count the number of Triples in a Network.

```wander
assertEqual "Empty Networks should contain 0 Triples" (count {}) 0
```

```wander
assertEqual "Count Network with multiple Triples." 
    (count {`a` {`b` [`c`, `d`], { `e`, `f` }} })
    3
```

## `union`

Combine two Networks.

```wander
union {`a` `b` `c`} {}
```

```wander
union {`a` `b` `c`} {`d` `e` `f`}
```

## `minus`

Remove all Triples in the second Network from the first.

```wander
minus {`a` `b` `c`} {}
```

```wander
minus {`a` `b` [`c`, `d`]} {`a` `b` `d`}
```

## `apply`

Apply is the first function that treats Slots in Networks differently than other values.
Apply takes two arguments.
The first is the Network that acts as a pattern and the second is an associative array holding values.

```wander
apply {} []
```

```wander
apply {`a` `b` `c`} []
```

```wander
apply {$entity `b` `c`} [entity = `a`]
```

```wander
apply {$entity `b` `c`, $x $y $z} [entity = `a`, x = `x`, y = `y`, z = 2423423434]
```

## `educe`

Educe draws out values from a Network using a Pattern.
It acts like the opposite of apply and will find all occurances of the Pattern.

```wander
educe {`a` `b` `c`} {$a $b $c} 
```

## `query`

## `infer`