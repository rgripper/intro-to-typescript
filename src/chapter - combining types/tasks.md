# Task 1
Define `DropDownList` type - a union of 2 types: `Input` and `MultiOptions`.

## Fields
- value: `string` 
- options: an array of `string`
- onChange: function that receives a value of type `string` and returns `void` (nothing)

# Task 2
Define `Transaction` type - a union of 3 other types: `Auditable`, `Identifiable`, `Funds` 

## Fields
- amount
- createdById
- creationDate
- currency
- id