
# Terminology

A `match expression` has a few parts:
-  `test expression`: the value that you would like to inspect
- `match clauses`, which contain:
	- `pattern`: an expression that attempts to describe the shape and value of the `test expression`
	- `when condition` (optional): - not available until v1.1
	- `result expression`: an expression that evaluates to the desired return value for a given match clause


With Kasai, this is how those things look:

```javascript
match(test_expression, [
	[pattern, when_condition, result_expression], // match clause
	[pattern, result_expression]				  // another match clause
]);
```

^ and that _whole_ thing is the match expression.
