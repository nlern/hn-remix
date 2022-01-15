import { redirect, useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import type { UserResponseType } from "~/types";
import UserDetails from "~/components/UserDetails";

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

export default function UserRoute() {
  const { user } = useLoaderData<LoaderData>();
  return <UserDetails user={user} />;
}
