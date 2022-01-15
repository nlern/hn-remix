import { redirect, useLoaderData } from "remix";
import type { LoaderFunction, MetaFunction } from "remix";
import type { UserResponseType } from "~/types";
import UserDetails from "~/components/UserDetails";
import { AppTitle } from "~/constants";

type LoaderData = {
  user: UserResponseType;
};

export const loader: LoaderFunction = async ({ params }) => {
  const userId = params.id;
  if (!userId) {
    return redirect("/");
  }
  const res = await fetch(`https://api.hnpwa.com/v0/user/${userId}.json`);
  const user = (await res.json()) as UserResponseType;
  return { user } as LoaderData;
};

export const meta: MetaFunction = ({ data }: { data: LoaderData }) => {
  return {
    title: `${data.user.id} - ${AppTitle}`,
  };
};

export default function UserRoute() {
  const { user } = useLoaderData<LoaderData>();
  return <UserDetails user={user} />;
}
