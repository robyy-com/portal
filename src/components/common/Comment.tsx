"use client";

import { useState } from "react";
import ExpComment from "./ExpComment";

function Comment() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className=" flex items-center gap-4 my-10">
        <h1 className=" font-semibold text-xl">Enter your comment:</h1>
        <button
          onClick={() => setShow(true)}
          className=" transition-all hover:text-white hover:bg-black text-regular font-semibold text-textColor border rounded-md border-textColor px-4 py-1"
        >
          Yes
        </button>
        <button
          onClick={() => setShow(false)}
          className="transition-all hover:text-white hover:bg-black text-regular font-semibold text-textColor border rounded-md border-textColor px-4 py-1"
        >
          No
        </button>
      </div>
      {show && <ExpComment setShow={setShow} />}
    </>
  );
}

export default Comment;
