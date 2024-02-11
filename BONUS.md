## Filtering and/or sorting deliveries by one or more properties

Is this intended to be carried out in the front-end or back-end? On lower-end devices (i.e. most of them!), we should strive to do as little as possible on the client.

In the API layer, filtering and sorting can both be carried out via database queries against indexes which should be very efficient. The front-end can make requests like GET <API_URL>/store/<:storeId>/deliveries?status=delivered&category=truck.

If this must be done in the front-end (e.g. the application will be used in locations with inconsistent network connections), then it could be done with regular array methods, but there are pitfalls with regards to Big O complexity.

## URL structure of the frontend application

The URL is a great place to store state! Which store is the user working in? Which delivery are they inspecting? Which filters are in use? By leveraging the url to store these things, the state of the application can be easily restored on refresh (or sent to/from a developer for enhanced debuggability) and query parameters can be automatically picked up by the framework's file-based routing system.

## A separate page for a given delivery

| Purpose         | Filepath             | URL             |
| --------------- | -------------------- | --------------- |
| List deliveries | /deliveries/page.tsx | /deliveries     |
| List a delivery | /deliveries/[...id]  | /deliveries/:id |

## Making the application responsive

We should employ a mobile-first design, expanding for bigger screens if necessary for the end-users. I've added a media query to change the number of columns on larger screens, but it defaults to a single column on mobile devices.
