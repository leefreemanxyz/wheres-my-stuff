# Take home assignment (medior frontend engineer)

Imagine a store that has trucks deliver the goods every day. People in the store would like to see how many (and which) things will come in the following days in order to plan their workload, as well as to track the status of each delivery.

You are tasked with creating a dashboard for viewing deliveries. The dashboard should group the deliveries by the status and category, making it easy to see, for example, how many packages are currently being transported to the store, or how many have already been delivered.

A delivery consists of:

- category
- list of items, each having a name and a quantity
- planned delivery date
- actual delivery date (optional)
- status (one of: planned, in-progress, delivered, unknown)

You can assume that there is a backend that can serve this information, here's an example:

```json
{
  "id": "TR12370",
  "status": "planned",
  "plannedDeliveryDate": "2022-11-01T10:47:30.641Z",
  "category": "truck",
  "items": [
    {
      "name": "chair",
      "quantity": 3
    },
    {
      "name": "leg",
      "quantity": 12
    }
  ]
}
```

For simplicity's sake, assume there is no authentication.

## Bonus points

You can choose to either implement or describe a plan during the interview to implement the following points:

- Filtering and/or sorting deliveries by one or more properties
- URL structure of the frontend application
- A separate page for a given delivery
- Making the application responsive

It's totally fine to not implement any of these, but be prepared to talk about them!

## Tech stack

Hard requirement is React/Typescript, the rest is up to you.
