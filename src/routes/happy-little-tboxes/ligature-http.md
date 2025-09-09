---
layout: Doc.liquid
---

# Ligature HTTP

Ligature HTTP is a simple HTTP based interface for working with Ligature.
Currently this document just explains expected endpoints.

## `POST /`

Parses the body of the request and executes it as Wander code.
The result is a value serailized as a Wander script.

```bash
curl --header "Content-Type: application/x-wander" \
  --request POST \
  --data 'assert-kb test {@id a b c}' \
  localhost:5000/
```
