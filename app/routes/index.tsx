// app/routes/index.tsx
import * as fs from "fs";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/start";
import { useState } from "react";
import { css } from "@pigment-css/react";

const filePath = "count.txt";

async function readCount() {
  return parseInt(
    await fs.promises.readFile(filePath, "utf-8").catch(() => "0"),
  );
}

const getCount = createServerFn("GET", () => {
  return readCount();
});

const updateCount = createServerFn("POST", async (addBy: number) => {
  const count = await readCount();
  await fs.promises.writeFile(filePath, `${count + addBy}`);
});

export const Route = createFileRoute("/")({
  component: Home,
  loader: async () => await getCount(),
  ssr: false
});

const pigmentDiv = css({ color: "red", background: "yellow", fontSize: 20 });

function Home() {
  const router = useRouter();
  const state = Route.useLoaderData();
  const [count, setCount] = useState(state);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      Server Counter
      <button
        onClick={() => {
          updateCount(1).then(() => {
            router.invalidate();
          });
        }}
      >
        Add 1 to {state}?
      </button>
      Client Counter
      <button onClick={() => setCount(count + 1)}>Add 1 to {count}</button>
      <div className={pigmentDiv}>hello</div>
    </div>
  );
}
