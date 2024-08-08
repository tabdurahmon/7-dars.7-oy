import Link from "next/link";
import React from "react";

function NotFoundPage() {
  return (
    <div className="text-center mt-36">
      <h1>Not found page</h1>
      <Link href="/" className="btn btn-link">
        Go Home
      </Link>
    </div>
  );
}

export default NotFoundPage;
