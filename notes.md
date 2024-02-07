##

How does middleware work with Remix and how to set up a basic test.
So this is middleware
What's the equivalent of NextResponse
`req` is a NextJS request object. Need remix version. I dont think need NextResponse
return new PreParsedRequest function

- A function returns instance of preparsedrequest
- Maps the NextJS req to preparsedrequest
  cookies - name and key - convert into headers. serializing

return Nextresponse with body of NextResponse
NextResponse sends to frontend.

## Next step: Session part

## Middleware

In Remix, middleware on the backend is implemented using the loader function and server-side functions.

When a request is made to a Remix route, the loader function for that route is executed. The loader function is responsible for handling the incoming request, performing any necessary processing, and generating the initial data or response to be passed to the route component.

Remix allows you to define server-side functions (SSR functions) that can be used as middleware within the loader function. These functions can perform tasks such as authentication, authorization, data fetching, and response manipulation.

#

I am trying to implement something in Remix that was originally done in nextjs. So, a loader recieves a client request at the specified route, and the route returns data in the format that the client expects.

The end goal is that the data is returned to the client in the format it expects.

So, what is returned needs to match the structure of the NextResponse object returned in the NextJS scenario, which looks similar to this:

```javascript
return new NextResponse(baseResponse.body, {
  headers: baseResponse.headers,
  status: baseResponse.statusCode,
});
```

There's some differences with Remix.

Remix would use a resource route. A resource route contains a loader function with no component. The loader function replaces `export async function GET(request: NextRequest)`, etc. Usually a loader function returns data like this:

```javascript
return new Response(pdf, {
  status: 200,
  headers: {
    "Content-Type": "application/pdf",
  },
});
```

The request data structure is also different in Remix, for example, you pass `{ request }: LoaderFunctionArgs` to the loader. The request structure differs from NextRequest. So I need to take the request and construct an object that matches the structure of NextRequest.

So the `request` parameter in Remix needs to be reformatted to match the NextRequest associated with Nextjs. When we return the final response to the client, it needs to match the structure of the NextREsponse returned by the getAppDirRequestHandler function.

Here's the code for the route:

Error: Initialisation not done. Did you forget to call the SuperTokens.init function?

Error: You made a GET request to "/api/auth/authorisationurl" but did not provide a `loader` for route "routes/api/auth/$", so there is no way to handle the request.

====

Still no luck getting the backend to work.
