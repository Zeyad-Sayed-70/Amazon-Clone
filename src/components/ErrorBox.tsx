import React from "react";

export default function ErrorBox({ errorMsg }: { errorMsg: string | null }) {
  return (
    <div
      className={`text-red-600 bg-primary_white border-2 border-red-600 font-bold text-left p-3 rounded-md ${
        !errorMsg ? "hidden" : "block"
      }`}
    >
      {errorMsg}
    </div>
  );
}
