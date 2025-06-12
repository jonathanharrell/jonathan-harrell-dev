This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Note about Illustrations

Add a new illustration to `/content/illustrations`.

Then run `npm run process-images`. This will generate two new versions of the illustration:

1. Dark version in `/public/assets/dark-illustrations`
2. Dynamic version with CSS variables in `/public/assets/illustrations`

Use `/public/assets/illustrations` for any image to be embedded within an article. Others can be used for SEO images.