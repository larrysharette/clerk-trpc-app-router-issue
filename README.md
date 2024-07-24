# Clerk + tRPC App Router Issue

The following is a reproduction of an authorized issue that occurs when using Clerk with tRPC inside the App Router.

## Reproduction

1. Clone the repo
2. Run `npm install`
3. Copy `.env.example` to `.env.local`
4. Create a Clerk application and set the `CLERK_SECRET_KEY` and `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` values in `.env.local`
5. Run `npm run dev`
6. Open `http://localhost:3000/`
7. Click the "Sign Up" button
8. Click the "Page with Issue" link. It will open a new tab and Next.js will show an error message that says `"UNAUTHORIZED"`
9. Go back to the main tab and click the "Page without Issue" link. It will open a new tab and the error message won't be there.

## Information found so far

Turning on debug mode inside `clerkMiddleware`, you'll see that the initial request shows the following:

```
  Headers debug, {
    "authStatus": "signed-out",
    "authMessage": "",
    "authReason": "dev-browser-missing"
  }
  Options debug, {
    "authStatus": "signed-out",
    "apiUrl": "https://api.clerk.com",
    "apiVersion": "v1",
    "authMessage": "",
    "secretKey": "sk_test_*********dZx",
    "authReason": "dev-browser-missing"
  }
```

And if you log the `cookies` object, inside the `isAuthed` middleware function in `src/server/api/trpc.ts`, you'll see that the `cookies` aren't set.
