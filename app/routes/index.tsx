import { LoaderFunction, redirect } from "remix";

export const loader: LoaderFunction = () => {
  return redirect("/top");
};

export default function Index() {
  return <div></div>;
}
