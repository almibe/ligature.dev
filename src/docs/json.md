---
layout: Doc.liquid
---

# Ligature JSON

Below are notes on how to encode Ligature values in JSON.

## Elements

```json
{
    "type": "element",
    "value": "element-value"
}
```

## Literals

```json
{
    "type": "literal",
    "value": "This is a literal value."
}
```

## Variables

```json
{
    "type": "variable",
    "value": "?variable-name"
}
```

## Quote

A quote like the following `(element-in-quote, "literal in a quote!", ())` would be represented as

```json
{
    "type": "quote",
    "value": [ 
        { "type": "element", "value": "element-in-quote" }, 
        { "type": "literal", "value": "literal in a quote!" },
        { "type": "quote", "value": [] },
    ]
}
```

## Network

```json
{
    "type": "network",
    "value": [
        [
            { "type": "element", "value": "element-in-a-triple" }, 
            { "type": "element", "value": "atribute-value" }, 
            { "type": "literal", "value": "This is a literal!" }, 
        ]
    ]
}
```
