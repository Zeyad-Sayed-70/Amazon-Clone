import Link from "next/link";
import React from "react";

export default function SigninReminder() {
  return (
    <div className="py-6 bg-primary_white">
      <div className="flex flex-col items-center justify-center gap-2 border-t-2 border-b-2 w-full py-6">
        <span className="text-small capitalize">
          See personalized recommendations
        </span>
        <button className="text-medium font-bold text-primary_black bg-yellow-400 py-1 w-full max-w-[200px] rounded-md">
          Sign in
        </button>
        <span className="text-small capitalize">
          New customer?{" "}
          <Link
            href={"#"}
            className="text-secondary_blue hover:text-secondary_orange"
          >
            Start here.
          </Link>
        </span>
      </div>
    </div>
  );
}
