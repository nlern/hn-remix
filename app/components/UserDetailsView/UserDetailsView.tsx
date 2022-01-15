import type { UserResponseType } from "~/types/user.type";

type UserDetailsViewProps = {
  user: UserResponseType;
};
export default function UserDetailsView({ user }: UserDetailsViewProps) {
  const hackerNewsUrl = "https://news.ycombinator.com/";
  return (
    <div className="user-details">
      <h1 className="username">{user.id}</h1>
      <br />
      <p className="user-info">
        ...joined <strong>{user.created}</strong> ago. Has{" "}
        <strong>{user.karma}</strong> karma.
      </p>
      <br />
      <p className="works">
        <a href={`${hackerNewsUrl}/submitted?id=${user.id}`}>submissions</a> /{" "}
        <a href={`${hackerNewsUrl}/threads?id=${user.id}`}>comments</a> /{" "}
        <a href={`${hackerNewsUrl}/favorites?id=${user.id}`}>favourites</a>
      </p>
      {user.about && (
        <>
          <br />
          <div
            className="user-about"
            dangerouslySetInnerHTML={{ __html: user.about }}
          />
        </>
      )}
    </div>
  );
}
