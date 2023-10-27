import React, { useContext } from "react";
import Rating from "@/components/Rating";
import { ProductDetailsContext } from "@/context/productDetail";
import { FaUserCircle } from "react-icons/fa";

export default function Reviews() {
  const { product } = useContext(ProductDetailsContext);
  return (
    <section className="flex flex-col md:flex-row items-start my-6 mt-8 gap-12">
      <div className="w-full md:w-[300px]">
        <h2 className="text-large font-bold mb-1">Customer reviews</h2>
        <div className="text-large flex items-center gap-4">
          {product?.rating && <Rating stars={product.rating} size={26} />}
          <h3>{product?.rating} of 5</h3>
        </div>
        <span className="block mt-3 mb-6">28,044 global ratings</span>
        <ProgressRateBar />
      </div>
      <div className="w-fit mx-auto">
        <h2 className="text-large font-bold mb-6">
          Top reviews from the Egypt
        </h2>
        {/* reviews display */}
        <div className="flex flex-col gap-6">
          <div className="text-medium">
            <div className="flex items-center gap-2">
              <FaUserCircle fontSize={35} className="text-grey_original" />
              <span>Romel</span>
            </div>

            <div className="flex items-center gap-2 mt-2">
              <Rating stars={5} />
              <span className="font-bold">
                Clear, Durable, and Pencil-Friendly Screen Protection!
              </span>
            </div>
            <span className="text-gray-400">on October 6, 2023</span>
            <div>
              <span className="text-gray-400">Item Package Quantity: 1 | </span>
              <span className="text-secondary_red hover:underline text-small cursor-pointer">
                Verified Purchase
              </span>
            </div>
            <pre className="whitespace-pre-wrap mt-4 max-w-[600px]">
              I purchased the Ailun Screen Protector for my new iPad 9th
              Generation and I must say, it’s a game-changer. The installation
              was straightforward with the included cleaning cloth, dust removal
              stick, and guide stick ensuring a bubble-free application​1​. The
              tempered glass feels sturdy yet doesn’t interfere with the clarity
              of the display. One of the major wins for me is its compatibility
              with the Apple Pencil. The screen responsiveness is not
              compromised, and my pencil glides smoothly without any hitches.
              The 2-pack is a great value as I have a spare protector in case I
              need it in the future. The only minor setback was the adhesiveness
              on the edges; it took a while to stick properly, but once adhered,
              it stayed in place firmly. Overall, I am highly satisfied with the
              Ailun Screen Protector. It provides the protection I need while
              maintaining the aesthetic and functionality of my iPad. I would
              definitely recommend this to anyone in search of a reliable screen
              protector without breaking the bank.
            </pre>

            <div className="flex items-center gap-3 mt-3">
              <button className="px-4 py-2 rounded-lg border hover:bg-gray-100">
                Helpful
              </button>
              {" | "}
              <button className="px-2 py-2 rounded-lg hover:text-gray-600">
                Report
              </button>
            </div>
          </div>
          <div className="text-medium">
            <div className="flex items-center gap-2">
              <FaUserCircle fontSize={35} className="text-grey_original" />
              <span>Romel</span>
            </div>

            <div className="flex items-center gap-2 mt-2">
              <Rating stars={5} />
              <span className="font-bold">
                Clear, Durable, and Pencil-Friendly Screen Protection!
              </span>
            </div>
            <span className="text-gray-400">on October 6, 2023</span>
            <div>
              <span className="text-gray-400">Item Package Quantity: 1 | </span>
              <span className="text-secondary_red hover:underline text-small cursor-pointer">
                Verified Purchase
              </span>
            </div>
            <pre className="whitespace-pre-wrap mt-4 max-w-[600px]">
              I purchased the Ailun Screen Protector for my new iPad 9th
              Generation and I must say, it’s a game-changer. The installation
              was straightforward with the included cleaning cloth, dust removal
              stick, and guide stick ensuring a bubble-free application​1​. The
              tempered glass feels sturdy yet doesn’t interfere with the clarity
              of the display. One of the major wins for me is its compatibility
              with the Apple Pencil. The screen responsiveness is not
              compromised, and my pencil glides smoothly without any hitches.
              The 2-pack is a great value as I have a spare protector in case I
              need it in the future. The only minor setback was the adhesiveness
              on the edges; it took a while to stick properly, but once adhered,
              it stayed in place firmly. Overall, I am highly satisfied with the
              Ailun Screen Protector. It provides the protection I need while
              maintaining the aesthetic and functionality of my iPad. I would
              definitely recommend this to anyone in search of a reliable screen
              protector without breaking the bank.
            </pre>

            <div className="flex items-center gap-3 mt-3">
              <button className="px-4 py-2 rounded-lg border hover:bg-gray-100">
                Helpful
              </button>
              {" | "}
              <button className="px-2 py-2 rounded-lg hover:text-gray-600">
                Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const rating_data = [
  {
    star: 5,
    percent: 70,
  },
  {
    star: 4,
    percent: 22,
  },
  {
    star: 3,
    percent: 4,
  },
  {
    star: 2,
    percent: 1,
  },
  {
    star: 1,
    percent: 3,
  },
];

function ProgressRateBar() {
  return (
    <div className="flex flex-col gap-3">
      {rating_data.map((prog, ind) => (
        <div
          key={ind}
          className="flex items-center gap-2 text-secondary_blue hover:text-secondary_orange"
        >
          <p>{prog.star} star</p>
          <div className="flex-1 h-[20px] bg-gray-300 rounded-md overflow-hidden">
            <div
              className="w-[100%] h-[100%] bg-orange-400 rounded-md"
              style={{ width: prog.percent + "%" }}
            ></div>
          </div>
          <p>{prog.percent}%</p>
        </div>
      ))}
    </div>
  );
}
