import React from "react";

const Freatured = () => {
  const data = [
    {
      _id: 1,
      title: "Graphics Design",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      img: "https://i.ibb.co/56jDts6/graphics-design-2.jpg",
    },
    {
      _id: 2,
      title: "Web Design",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      img: "https://i.ibb.co/c2gQpDR/web-design-2.jpg",
    },
    {
      _id: 3,
      title: "Web Development",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      img: "https://i.ibb.co/FD0xVMH/web-development.jpg",
    },
    {
      _id: 4,
      title: "Digital Marketing",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      img: "https://i.ibb.co/CHKdP2n/digital-marketing-2.jpg",
    },
  ];
  return (
    <div className="my-20">
      <div className="flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center py-5">
          Featured Services
        </h2>
        <div className="h-1 bg-gray-700 w-36 rounded"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 my-10 gap-5 mx-28">
        {data.map((d) => (
          <div className="flex justify-center">
            <div
              className="hero min-h-screen"
              style={{
                backgroundImage: `url(${d.img})`,
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold text-white">
                    {d.title}
                  </h1>
                  <p className="mb-5">{d.des}</p>
                  <button className="btn btn-primary">Explore Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Freatured;
