import { data } from "@/constants/meut";

export default async function Features({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;

  const slug = decodeURIComponent(section);
  console.log(slug);

  const Logo = data[slug].logo;

  return (
    <div className="relative px-20 flex flex-row justify-center  h-screen gap-6">
      {/* <div className="h-32 w-full bg-white bg-[linear-gradient(to_right,black_0_50%,transparent_50%_100%)] bg-position-[0_0,0_calc(100%-1px)] bg-size-[10%_1px] [background-repeat:repeat_no-repeat]"></div> */}
      <div
        className="w-1 h-screen 
  bg-[linear-gradient(to_bottom,#9ca3af_0_50%,transparent_50%_100%)] 
  bg-size-[1px_2%] 
  [background-repeat:no-repeat_repeat]"
      ></div>
      <div className="px-10 py-30  flex-1 flex flex-row justify-between ">
        <div className="flex-1 flex flex-col gap-20 ">
          <div
            style={{ fontFamily: "Thunder" }}
            className="text-8xl tracking-wide w-80"
          >
            {data[slug].subpage}
          </div>
          <div className="text-[#414141] text-xs w-170 text-justify">
            {data[slug].description}
          </div>
        </div>
        <div className="flex-1 flex  p-6 flex-col items-center justify-start gap-10  ">
          <Logo w={150} h={150} />
          <div className="">
            <h1 className="text-2xl my-4 font-light">{"Formate : "}</h1>
            {data[slug].formats.map((e) => (
              <div className="leading-8 text-sm text-[#414141]" key={e}>
                {e}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <div className="p-1 rounded-full bg-linear-to-r from-gray-400 via-gray-200 to-gray-400"> */}
      <div className="absolute top-[90%] border border-gray-100 rounded-full gap-1 flex flex-row items-center justify-end  py-1 px-1 min-w-52 w-auto    bg-linear-to-r from-white to-black/10">
        <span
          className="text-zinc-700 tracking-wide text-xl ml-2"
          style={{ fontFamily: "Thunder" }}
        >
          {data[slug].subpage}
        </span>
        <div className="rounded-full flex justify-center items-center bg-black w-14 h-10 shadow-md shadow-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
