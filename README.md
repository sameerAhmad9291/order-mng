# order-management ( Technical challenge )

## contents
- [installation](#installation)
- [run tests](#run-tests)
- [usage](#usage)
- [available APIs](#available-apis)
- [full scenario](#full-scenario)
- [technical explanation](#technical-explanation)

## Installation
for the services to run smothly together,

just clone the repo then run `npm i` in frontend & backend directory.

## Run Tests

make sure you have node installed

run `npm run test`

## Usage

after running both frontend & backend using `npm run start`.


then you can hit REST APIs to `0.0.0.0:3000/api`

## Available APIs

- `GET    /users/:id`
- `GET   /orders`
- `GET   /orders/:id`
- `PUT   /orders/:id`

## Full Scenario

this is the complete scenario & frontend wireframes in the task

###### Login Page
|          |            |         |
| -------- | ---------- | ------- |
| Email    | [ ...... ] |         |
| Password | [ ...... ] | `Login` |


###### Orders Overview Page
| Title        | Booking Date | Address           | Customer  |
| ------------ | ------------ | ----------------- | --------- |
| Test Order 1 | 22.06.2019   | Wriezener Str. 12 | Emad Alam |
| Test Order 2 | 23.06.2019   | Mitte 12          | Jan Runo  |

###### Orders Details/Edit Page
|              |                                                    |
| ------------ | -------------------------------------------------- |
| Title        | [ Test Order 1 ]                                   |
| Booking Date | [ *22.06.2019* ]                                   |
| Address      | Wriezener Str. 12<br>Berlin 13055<br>Germany       |
| Customer     | Emad Alam <br>emad.alam@google.come<br>0123456789 |

Order Data Example
```json
{
  "address": {
    "city": "Berlin",
    "country": "Germany",
    "street": "Wriezener Str. 12",
    "zip": "13055"
  },
  "bookingDate": 1554284950000,
  "customer": {
    "email": "emad.alam@google.come",
    "name": "Emad Alam",
    "phone": "015252098067"
  },
  "title": "Test Order 1",
  "uid": "hKlIKPoZc2xCKGTUKZK2"
}
```

User Data Example
```json
{
  "email": "coding-challenge",
  "name": "Coding Challenge",
  "phone": "0123456789",
  "uid": "5iEm1HvIxubLaiKO4yj0Npmvq0F2"
}
```

## Technical Explanation

take a look on this flow chart

the code executes as folow
  - perform login flow from fireship auth.
  - on successful authentication route application to orders pages.
  - show all orders by calling REST endpoint 'http://localhost:3000/api/orders'
  - navigate user to detail page to perform update/view.
  - order detail page user can update the order by calling endpoint 'http://localhost:3000/api/orders/:id'

order model.
    uid: string;
    id: string;
    title: string;
    bookingDate: Date;
    address: IAddress;
    customer: ICustomer;
