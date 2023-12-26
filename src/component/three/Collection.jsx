const Collection = () => {
  const TAGS = ["Profile", "New York", "Relax", "Person", "Fashion"];
  return (
    <div className="w-full rounded-lg bg-[#EFF0F1] p-2 font-[#0E0238] shadow-lg">
      <h1 className="font-meri text-2xl font-bold md:text-center md:text-4xl">
        Popular Collection
      </h1>
      <div className="mt-6 space-x-2">
        {TAGS.map((tag, stt) => (
          // eslint-disable-next-line react/jsx-key
          <a
            id={stt}
            className="mb-2 inline-block cursor-pointer rounded-sm bg-white p-1 hover:bg-[#070707]  hover:text-[red]"
          >
            {tag}
          </a>
        ))}
      </div>
      {/* hinh */}
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        <div className="rounded-2xl bg-[#ddd5d5] p-4">
          <img
            className="aspect-video w-full"
            src="https://images.unsplash.com/photo-1700239025572-65c407f152cd?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="#"
          />
          <div className="mt-4 grid grid-cols-3 gap-4">
            <img
              className="aspect-video w-full"
              src="https://images.unsplash.com/photo-1682685795557-976f03aca7b2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="#"
            />
            <img
              className="aspect-video w-full"
              src="https://images.unsplash.com/photo-1699730148132-1409a3728479?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="#"
            />
            <img
              className="aspect-video w-full"
              src="https://plus.unsplash.com/premium_photo-1698846877274-7f53296cafb9?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="#"
            />
          </div>
          <div className="flex items-center justify-between pt-6">
            <p className="font-poppins text-2xl font-bold">People</p>
            <p className="flex font-poppins ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mr-2 h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              144
            </p>
          </div>
        </div>
        <div className="rounded-2xl bg-[#ddd5d5] p-4">
          <img
            className="aspect-video w-full"
            src="https://images.unsplash.com/photo-1700239025572-65c407f152cd?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="#"
          />
          <div className="mt-4 grid grid-cols-3 gap-4">
            <img
              className="aspect-video w-full"
              src="https://images.unsplash.com/photo-1682685795557-976f03aca7b2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="#"
            />
            <img
              className="aspect-video w-full"
              src="https://images.unsplash.com/photo-1699730148132-1409a3728479?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="#"
            />
            <img
              className="aspect-video w-full"
              src="https://plus.unsplash.com/premium_photo-1698846877274-7f53296cafb9?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="#"
            />
          </div>
          <div className="flex items-center justify-between pt-6">
            <p className="font-poppins text-2xl font-bold">People</p>
            <p className="flex font-poppins ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mr-2 h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              144
            </p>
          </div>
        </div>
        <div className="rounded-2xl bg-[#ddd5d5] p-4">
          <img
            className="aspect-video w-full"
            src="https://images.unsplash.com/photo-1700239025572-65c407f152cd?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="#"
          />
          <div className="mt-4 grid grid-cols-3 gap-4">
            <img
              className="aspect-video w-full"
              src="https://images.unsplash.com/photo-1682685795557-976f03aca7b2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="#"
            />
            <img
              className="aspect-video w-full"
              src="https://images.unsplash.com/photo-1699730148132-1409a3728479?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="#"
            />
            <img
              className="aspect-video w-full"
              src="https://plus.unsplash.com/premium_photo-1698846877274-7f53296cafb9?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="#"
            />
          </div>
          <div className="flex items-center justify-between pt-6">
            <p className="font-poppins text-2xl font-bold">People</p>
            <p className="flex font-poppins ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mr-2 h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              144
            </p>
          </div>
        </div>
        <div className="rounded-2xl bg-[#ddd5d5] p-4">
          <img
            className="aspect-video w-full"
            src="https://images.unsplash.com/photo-1700239025572-65c407f152cd?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="#"
          />
          <div className="mt-4 grid grid-cols-3 gap-4">
            <img
              className="aspect-video w-full"
              src="https://images.unsplash.com/photo-1682685795557-976f03aca7b2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="#"
            />
            <img
              className="aspect-video w-full"
              src="https://images.unsplash.com/photo-1699730148132-1409a3728479?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="#"
            />
            <img
              className="aspect-video w-full"
              src="https://plus.unsplash.com/premium_photo-1698846877274-7f53296cafb9?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="#"
            />
          </div>
          <div className="flex items-center justify-between pt-6">
            <p className="font-poppins text-2xl font-bold">People</p>
            <p className="flex font-poppins ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mr-2 h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              144
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
