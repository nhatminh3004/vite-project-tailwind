import React, { useState } from "react";

const UserList = () => {
  const [search, setSearch] = useState("");
  const listUser = [
    {
      name: "Tiến",
      job: "Graphics Designer",
      avatar:
        "https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833572.jpg?w=740&t=st=1703323048~exp=1703323648~hmac=316ef52076ef115e1f433ae60f50e7ff7887e14ae512779b0fb13090eb03d334",
      tags: ["Java", "UI/UX", "IT"],
    },
    {
      name: "Em bé thuỳ thuỳ",
      job: "Software Engineer",
      avatar:
        "https://img.freepik.com/free-photo/3d-illustration-cute-cartoon-girl-blue-jacket-glasses_1142-41044.jpg?w=740&t=st=1703323124~exp=1703323724~hmac=a845787b748060d492a8d4afa7d0cf685065b46f80212eb206988d204886a0b1",
      tags: ["JavaScript", "Database", "AI"],
    },
    {
      name: "Minh",
      job: "Graphics Designer",
      avatar:
        "https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833572.jpg?w=740&t=st=1703323048~exp=1703323648~hmac=316ef52076ef115e1f433ae60f50e7ff7887e14ae512779b0fb13090eb03d334",
      tags: ["Java", "UI/UX", "IT"],
    },
    {
      name: "Minh Nhat",
      job: "Software Engineer",
      avatar:
        "https://img.freepik.com/free-photo/3d-illustration-cute-cartoon-girl-blue-jacket-glasses_1142-41044.jpg?w=740&t=st=1703323124~exp=1703323724~hmac=a845787b748060d492a8d4afa7d0cf685065b46f80212eb206988d204886a0b1",
      tags: ["JavaScript", "Database", "AI"],
    },
    {
      name: "Anh Tuan",
      job: "Graphics Designer",
      avatar:
        "https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833572.jpg?w=740&t=st=1703323048~exp=1703323648~hmac=316ef52076ef115e1f433ae60f50e7ff7887e14ae512779b0fb13090eb03d334",
      tags: ["Java", "UI/UX", "IT"],
    },
    {
      name: "Kiet pham",
      job: "Software Engineer",
      avatar:
        "https://img.freepik.com/free-photo/3d-illustration-cute-cartoon-girl-blue-jacket-glasses_1142-41044.jpg?w=740&t=st=1703323124~exp=1703323724~hmac=a845787b748060d492a8d4afa7d0cf685065b46f80212eb206988d204886a0b1",
      tags: ["JavaScript", "Database", "AI"],
    },
  ];

  const filterUser =
    search.length > 0
      ? listUser.filter((user) => {
          return user.name
            .toLocaleLowerCase()
            .includes(search.toLocaleLowerCase());
        })
      : listUser;
  const TAGS = ["Profile", "New York", "Relax", "Person", "Fashion"];
  console.log("filter", filterUser.length);
  return (
    <div className="  h-full max-w-screen-sm bg-gray-200 p-3 shadow-sm md:max-w-full">
      <h1 className="font-meri text-3xl font-black">User List</h1>
      <div className="mt-6 flex flex-col gap-4 md:flex-row">
        <div className="relative grow  rounded-md border-4  ">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search something..."
            className=" w-full px-4 py-3 pl-10"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="absolute left-3 top-3.5 h-5 w-5 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
        <div className=" mt-6 space-x-1 md:mt-0">
          {TAGS.map((tag, stt) => (
            // eslint-disable-next-line react/jsx-key
            <a
              id={stt}
              className="mb-2   inline-block  cursor-pointer rounded-sm bg-white px-4  py-3 hover:bg-[#43ceff] hover:text-white md:rounded-md"
            >
              {tag}
            </a>
          ))}
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
        {filterUser.length > 0 ? (
          filterUser.map((user) => (
            <div
              key={user.name}
              className="flex gap-x-4 bg-[#fcf4f4] p-6 hover:border-[2px] hover:border-[#5a45bd] hover:bg-[#f4d4d4] hover:shadow-lg"
            >
              <img
                src={user.avatar}
                className="h-24 w-24 rounded-full"
                alt="#"
              />
              <div>
                <h3 className="font-meri font-black">{user.name}</h3>
                <p className="font-poppins text-sm">{user.job}</p>
                <div className="mt-4 space-x-1">
                  {user.tags.map((tag) => (
                    <span
                      className="rounded-full border-[1px] border-slate-500 bg-[#c8e26f] px-1 py-1 text-xs"
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="md:flex md:h-[100px] md:w-screen md:items-center md:justify-center md:bg-red-950">
            <div className="  flex h-[50px] items-center justify-center rounded-md bg-[#c50b37] p-6 font-meri font-bold ">
              Không tìm thấy kết quả
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserList;
