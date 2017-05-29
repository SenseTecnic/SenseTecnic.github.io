---
layout: page
permalink: /mqtt/api/
title: "MQTT Docs: API documentation"
---

# Temporary Client API

To support creating clients programmatically, we have added basic auth support to the STS-MQTT service URLs.  Note that this API will likely be deprecated and replaced by a versioned API with support for OAuth very soon.

## Authentication

To make these calls you must either be logged in, or provide basic authentication credentials (account name and password with the request.

If the username and password supplied with the basic auth are not correct, you will get a redirect status code (302), and content from a login page.  This will be replaced with an appropriate unauthorized status and JSON error with the new API.

## Errors

If required fields are missing or there are other errors, you will get a non 200 HTTP status with some JSON indicating the error.  This will be replaced with an appropriate status code and JSON error with the new API.

```
Example Errors:
302 Redirect: When you are not logged in or the user authentication is not correct
400 Bad Request: When the data you supply cannot fulfill the system validation rules
404 Not Found: When you try to access a record that does not exist in the system
```

# Client endpoints

## POST /api/client
**Create client**

Here is an example client.  Note that the client id must be globally unique in the system.  The convention is to use the account prefix followed by an identifier.
The content you POST will be:

```
{
  "name": "new client",
  "description": "test client",
  "clientId": "mike-9999",
  "key": "test-password"
}
```

If successful, the output will look something like the following.
```
{
  "name": "new client",
  "description": "test client",
  "owner": "mike",
  "clientId": "mike-9999",
  "createdAt": "2017-05-24T19:51:38.961Z",
  "updatedAt": "2017-05-24T19:51:38.961Z",
  "id": "5925e44a43ad89280f477de2"
}
```
**Note:** You need to include at least the `name`, `clientId` and `key` fields in the POST request, or else a temporary client will be created with an expiration time period.  


## GET /api/client
** Get all clients **

Example output:
```
[
  {
    "owner": "mike",
    "name": "test 234",
    "description": "test",
    "clientId": "mike-18a355",
    "createdAt": "2017-05-23T17:32:56.708Z",
    "updatedAt": "2017-05-23T17:45:51.576Z",
    "id": "59247248c263006715427177"
  },
  {
    "owner": "mike",
    "name": "new client",
    "description": "test client",
    "clientId": "mike-9999",
    "createdAt": "2017-05-24T19:51:38.961Z",
    "updatedAt": "2017-05-24T19:51:38.961Z",
    "id": "5925e44a43ad89280f477de2"
  }
]
```


## GET /api/client/:id
** Get specific client **

Request:

`GET /api/client/5925e44a43ad89280f477de2`

Output:
```
{
  "owner": "mike",
  "name": "new client",
  "description": "test client",
  "clientId": "mike-9999",
  "createdAt": "2017-05-24T19:51:38.961Z",
  "updatedAt": "2017-05-24T19:51:38.961Z",
  "id": "5925e44a43ad89280f477de2"
}
```

**Note:** the `:id` in the request url is the `id` field of a client, not the `clientId` field.

## PUT /api/client/:id
** Update client **

Here is an example to update the `name`, `description` and the `key` field of an existing client.  Note that the client must exist in the system. 

Request:

`PUT /api/client/5925e44a43ad89280f477de2` 

The content you PUT will be:

```
{
  "name": "updated client",
  "description": "test client updated",
  "key": "new-password"
}
```

If successful, the output will look something like the following.
```
{
  "name": "updated client",
  "description": "test client updated",
  "owner": "mike",
  "clientId": "mike-9999",
  "createdAt": "2017-05-24T19:51:38.961Z",
  "updatedAt": "2017-05-24T21:46:48.351Z",
  "id": "5925e44a43ad89280f477de2"
}
```

## DELETE /api/client/:id
** Delete client **

Here is an example to delete an existing client. Note that the client must exist in the system.

Request:

`DELETE /api/client/5925e44a43ad89280f477de2`

If successful, the output will return the information of the deleted client.
```
{
  "name": "updated client",
  "description": "test client updated",
  "owner": "mike",
  "clientId": "mike-9999",
  "createdAt": "2017-05-24T19:51:38.961Z",
  "updatedAt": "2017-05-24T21:46:48.351Z",
  "id": "5925e44a43ad89280f477de2"
}
```