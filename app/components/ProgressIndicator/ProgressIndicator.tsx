import { useEffect, useState } from "react";
import type { LinksFunction } from "remix";

import stylesUrl from "./progress-indicator.css";

export const links: LinksFunction = () => {
  return [{ href: stylesUrl, rel: "stylesheet" }];
};

export default function ProgressIndicator() {
  const [p, setP] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    function next() {
      setP(p + 0.1);
      const remaining = 1 - p;
      if (remaining > 0.15) setTimeout(next, 500 / remaining);
    }
    setTimeout(next, 250);
  }, []);

  return (
    <>
      {visible && (
        <div className="progress-container">
          <div className="progress" style={{ width: `${p * 100}%` }}></div>
        </div>
      )}
      {p >= 0.4 && <div className="fade" />}
    </>
  );
}
