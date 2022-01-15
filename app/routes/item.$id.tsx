import { LoaderFunction, redirect, useLoaderData } from "remix";
import Item from "~/components/Item/Item";
import type { Item as ItemType } from "~/types";

type ItemRouteLoadeData = {
  item: ItemType;
};

export const loader: LoaderFunction = async ({ params }) => {
  const itemId = params.id;
  if (!itemId) return redirect("/");
  const res = await fetch(`https://api.hnpwa.com/v0/item/${itemId}.json`);
  const item = (await res.json()) as ItemType;
  return { item } as ItemRouteLoadeData;
};

export default function ItemRoute() {
  const { item } = useLoaderData<ItemRouteLoadeData>();
  return <Item item={item} />;
}
