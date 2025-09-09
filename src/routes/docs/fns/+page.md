---
layout: Doc.liquid
---

<h1>Wander Functions</h1>

Below is all of the functions currently included with Wander.
These are expected to change frequently during developement.

{% for doc in docs %}

<div>
<h2>{{doc.value}}</h2>

{{doc | json}}


</div>

{% endfor %}
