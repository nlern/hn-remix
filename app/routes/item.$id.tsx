import { redirect, useLoaderData } from "remix";
import type { LinksFunction, LoaderFunction, MetaFunction } from "remix";
import Item, { links as itemLinks } from "~/components/Item/Item";
import { links as commentLinks } from "~/components/Comment/Comment";
import type { Item as ItemType } from "~/types";
import { AppTitle } from "~/constants";

type ItemRouteLoaderData = {
  item: ItemType;
};

export const loader: LoaderFunction = async ({ params }) => {
  const itemId = params.id;
  if (!itemId) return redirect("/");
  const res = await fetch(`https://api.hnpwa.com/v0/item/${itemId}.json`);
  const item = (await res.json()) as ItemType;
  return { item } as ItemRouteLoaderData;
};

export const meta: MetaFunction = ({ data }: { data: ItemRouteLoaderData }) => {
  return {
    title: `${data.item.title} - ${AppTitle}`,
  };
};

export const links: LinksFunction = () => {
  return [...itemLinks(), ...commentLinks()];
};

export default function ItemRoute() {
  const { item } = useLoaderData<ItemRouteLoaderData>();
  return <Item item={item} />;
}
