import { useItems } from "/src/store/main.ts";

export default function Basket() {
  const items = useItems((state) => state.items);
  return (
    <main>
      <article>
        <section>
          { items.length === 0 && <h1>There is empty list!</h1>}
        </section>
      </article>
    </main>
  )
}
