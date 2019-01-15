# Task 1
Define `HttpResponse` type - a union of 2 types, can either have `data` or `errorMessage` field.

## Possible fields
- statusCode 
  possible values: 200, 404, 500
- data
- errorMessage

# Task 2
Define `ChatEvent` type - a union of 3 other types.
`type ChatEvent = ???`

## Possible fields
- type 
  possible values: "UserJoined", "UserLeft", "MessagePublished"
- joinedUser
  - name
  - avatarUrl (optional)
- leftUserId
- message
  - text

