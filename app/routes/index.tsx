import { LoaderFunction, redirect } from "remix";

export const loader: LoaderFunction = ({ request }) => {
  const url = new URL(request.url);
  return redirect("/top/1", {
    status:
      url.hostname === "localhost" || url.hostname === "127.0.0.1" ? 302 : 301,
  });
};
