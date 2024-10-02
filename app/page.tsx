import Image from "next/image";

export default function Home() {
  return (
      <div className=" rounded-xl p-2 bg-[#fdfcf9] w-max flex items-center">
        <div className="p-2 flex flex-col h-auto bg-[#fdfcf9] text-black border-[#706C61] border-2 rounded-xl">
          <div className="sm:flex-col md:flex-row flex items-center  md:justify-between  border-red-500 p-0 border-0">
            <div className="order-2 md:order-1 ">
              <div><a href="https://leetcode.com/u/Hassan031/"
                className="flex flex-col border-[#0000004f] p-2 border-2  rounded-xl items-center"><span
                  className="md:text-[32px] text-[24px] font-bold flex items-center gap-2">Hassan031<svg stroke="currentColor"
                    fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" className="text-[24px]"
                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z">
                    </path>
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z">
                    </path>
                  </svg></span>
                <div className="flex-center gap-2 "><span className="flex md:text-[16px] text-[14px] font-semibold">Muhammad
                  Hassan</span></div>
              </a></div>
            </div>
            <div
              className="order-1 md:order-2 border-slate-800 p-2  items-center justify-center sm:text-[32px] md:text-[36px] font-bold font-sans">
              <span className="flex gap-2 items-center">Leet<span className="text-[#EF9B0B]">-ए-</span>lytics <svg
                stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em"
                width="1em" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z">
                </path>
              </svg></span></div>
          </div>
          <div className="flex w-full  justify-around md:gap-4 border-red-500 p-2 border-0">
            <div
              className="flex flex-col md:flex-row justify-between gap-2 w-full border-red-500 p-0 border-0 md:items-center">
              <div className="order-3 md:order-1">
                <div>
                  <div
                    className="p-2 h-full border-[#0000004f] border-2 rounded-xl flex flex-col justify-center items-center md:items-start">
                    <h2 className="font-semibold text-[12px] ">Languages Solved</h2>
                    <ul className="flex flex-wrap md:flex-nowrap md:flex-col gap-[5px] md:gap-0 justify-around">
                      <li className="flex flex-col md:flex-row  md:gap-2 m-1 border-0 border-red-400 items-center"><span
                        className="text-[16px]  ">C++</span> <span className="text-[20px] font-semibold">57</span></li>
                      <li className="flex flex-col md:flex-row  md:gap-2 m-1 border-0 border-red-400 items-center"><span
                        className="text-[16px]  ">Python3</span> <span className="text-[20px] font-semibold">43</span></li>
                    </ul>
                  </div>
                  <pre></pre>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="">
                  <div className="flex flex-col border-[#0000004f] p-2 border-2 rounded-xl h-full gap-2 justify-center iy ">
                    <div className="flex gap-2 justify-around items-center">
                      <div className="gap-2 flex flex-col md:text-[16px] text-[14px]">
                        <div className="border-2 border-[#0000003c] rounded-lg p-1"><span>Ranking: </span><span
                          className="font-semibold md:text-[20px] text-[16px]">1152261</span></div>
                        <div className="border-2 border-[#0000003c] rounded-lg p-1"><span>Reputation: </span><span
                          className="font-semibold md:text-[20px] text-[16px]">0</span></div>
                      </div>
                      <div className="border-2 border-[#0000004f] rounded-xl p-2 flex flex-col items-center justify-center">
                        <span className="md:text-[48px] text-[36px] font-bold">82<span
                          className="md:text-[16px] text-[12px] font-semibold">/3308</span></span><span
                            className="text-[12px] font-semibold mt-[-12px]">Solved </span></div>
                    </div>
                    <div className="border-2 border-[#0000004f] rounded-xl p-1 flex justify-around">
                      <div className=""><span className="md:text-[16px] text-[12px]">Easy </span><span
                        className="text-lg font-semibold">42</span></div>
                      <div><span className="md:text-[16px] text-[12px]">Medium </span><span
                        className="text-lg font-semibold">39</span></div>
                      <div><span className="md:text-[16px] text-[12px]">Hard </span><span
                        className="text-lg font-semibold">1</span></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-2 ">
                <div className=" border-[#0000004f] rounded-xl p-1 border-2 flex flex-col items-center justify-around">
                  <div className="flex flex-col md:border-2 border-[#0000004f] rounded-xl p-2 items-center"><span
                    className="md:text-[36px] text-[28px] text-green-500  font-bold">64.43%</span><span
                      className="text-[12px] font-semibold mt-[-12px]">Acceptance rate </span></div>
                  <div>
                    <ul className=" flex flex-row md:flex-col mt-2 gap-2 md:gap-0">
                      <li className="flex flex-col md:flex-row gap-2 px-2 items-center">Advance<span className="md:text-[16px] font-[600] text-[20px]">12</span></li>
                      <li className="flex flex-col md:flex-row gap-2 px-2 items-center">Intermediate<span className="md:text-[16px] font-[600] text-[20px]">108</span></li>
                      <li className="flex flex-col md:flex-row gap-2 px-2 items-center">Fundamental<span className="md:text-[16px] font-[600] text-[20px]">98</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex flex-col md:flex-row items-center justify-start  gap-2 border-red-500 p-0 border-0">
            <div>
              <div className="text-[28px] border-slate-800 p-0 border-0 flex justify-around gap-4 items-center rounded-xl">
                <a className="bg-[#f0e7be] p-2 rounded-full opacity-40" target="_blank" rel="noopener noreferrer"><svg
                  stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em"
                  width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z">
                  </path>
                </svg></a><a className="bg-[#f0e7be] p-2 rounded-full opacity-100"
                  href="https://github.com/hassan-31x"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                    viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z">
                    </path>
                  </svg></a><a className="bg-[#f4ecc5] p-2 rounded-full opacity-40"><svg stroke="currentColor"
                    fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                    </path>
                  </svg></a><a className="bg-[#f4ecc5] p-2 rounded-full opacity-40" href=""><svg stroke="currentColor"
                    fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5M.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5">
                    </path>
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0"></path>
                  </svg></a></div>
            </div>
            <div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
  );
}
