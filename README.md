# Redis Submission Queue

A minimal LeetCode-style code submission queue built with Express, Redis, and TypeScript.

## Flow

1. Client sends code via `POST /submit` to `express-backend`.
2. Backend pushes the payload to a Redis list named `submissions` (`LPUSH`).
3. `worker` waits on the list (`BRPOP`), grabs each submission FIFO, and processes it (simulated 1s execution).

---

## Prerequisites

- Node.js installed
- A running Redis instance on `localhost:6379`

```bash
# quick way to run redis with docker
docker run -d -p 6379:6379 --name redis redis
```

---

## Running it

Open two separate terminals:

### 1. Backend (port 3000)

```bash
cd express-backend
npm install
npx tsc -b
node dist/index.js
```

### 2. Worker

```bash
cd worker
npm install
npx tsc -b
node dist/index.js
```

---

## Testing

use postman with 

``` localhost : 3000/submit ```


