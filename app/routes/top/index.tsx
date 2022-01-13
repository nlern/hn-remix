import { LoaderFunction, redirect } from "remix";

export const loader: LoaderFunction = () => {
  return redirect("/top/1");
};
export default function TopIndex() {
  return <></>;
}
