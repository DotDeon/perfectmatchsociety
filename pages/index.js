import Head from "next/head";
import Image from "next/image";
import logo from "../assets/PFP.svg";
import icon from "../assets/icon.png";
import strip from "../assets/stroke.png";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Perfect Match Society</title>
        <meta
          name="description"
          content="Welcome to the Perfect Match Society. A collection of 10,000 PMS
              living on the Ethereum Blockchain and inspired by Doodles x Cool
              Cats x WGMInterface. They are randomly generated and composed of a
              variety of hand-drawn traits"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="sticky bg-purple top-0 z-50 flex justify-between lg:px-36 px-4">
        {/* Left */}
        <div className="flex items-center justify-center flex-row">
          <div
            // onClick={() => setScroll(99)}
            className="relative flex items-center cursor-pointer "
          >
            <Image
              src={logo}
              layout="fixed"
              objectFit="contain"
              width={60}
              height={90}
            />
          </div>
        </div>

        {/* Middle */}
        {/* <div className="flex items-center  py-2"> */}
        <div className="flex items-center space-x-9 space-between text-white">
          <div className="hidden md:flex items-center space-x-10 justify-start text-white">
            <p
              className={
                "hidden md:inline-flex text-lg font-bold cursor-pointer hover:text-green text-black"
              }
              // onClick={() => setScroll(1)}
            >
              Mint
            </p>

            {/* <Link href={{ pathname: '/new' }} onClick={setScroll(1)}> */}
            <p
              className={
                "hidden md:inline-flex text-lg font-bold cursor-pointer hover:text-green text-black"
              }
              // onClick={() => setScroll(5)}
            >
              Roadmap
            </p>
            {/* </Link>
          <Link href={{ pathname: '/' }} onClick={setScroll(2)}> */}
            <p
              className={
                "hidden md:inline-flex text-lg font-bold cursor-pointer hover:text-green text-black"
              }
              // onClick={() => setScroll(2)}
            >
              FAQ
            </p>
          </div>

          <div className="flex relative flex-row space-x-4 md:space-x-8">
            <a
              target="_blank"
              href="https://opensea.io"
              rel="noopener noreferrer"
              className=" p-2 bg-black rounded-full hover:bg-green"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.7941 10.6383V11.6046C18.7941 11.66 18.7602 11.7094 18.7109 11.7309C18.4088 11.8604 17.3747 12.335 16.9448 12.933C15.8475 14.4602 15.0092 16.644 13.1351 16.644H5.31708C2.54619 16.644 0.300781 14.3909 0.300781 11.6107V11.5213C0.300781 11.4474 0.360871 11.3873 0.434851 11.3873H4.79313C4.87941 11.3873 4.94259 11.4674 4.93491 11.5522C4.90407 11.8357 4.95648 12.1255 5.09055 12.389C5.34945 12.9145 5.88576 13.2428 6.46521 13.2428H8.62278V11.5583H6.48987C6.38046 11.5583 6.31575 11.432 6.37893 11.3426C6.40203 11.3071 6.42825 11.2702 6.45597 11.2286C6.65787 10.9419 6.94605 10.4965 7.2327 9.98949C7.42842 9.64737 7.61796 9.28212 7.77054 8.91534C7.80138 8.84907 7.82601 8.78124 7.85067 8.71497C7.89228 8.59785 7.93545 8.48844 7.96626 8.37903C7.9971 8.28654 8.02173 8.18946 8.04639 8.09853C8.11884 7.78722 8.14965 7.45743 8.14965 7.11531C8.14965 6.98124 8.1435 6.84099 8.13117 6.70692C8.12499 6.56052 8.10651 6.41409 8.088 6.26769C8.07567 6.13824 8.05257 6.01032 8.02791 5.87625C7.9971 5.68053 7.95393 5.48637 7.90461 5.29062L7.88766 5.21667C7.85067 5.08257 7.81986 4.95468 7.77672 4.82061C7.65495 4.39986 7.51473 3.98994 7.36677 3.60621C7.31283 3.45363 7.25118 3.30723 7.18953 3.16083C7.09863 2.94045 7.00614 2.74011 6.92139 2.55054C6.87825 2.46423 6.84126 2.38563 6.80427 2.3055C6.76266 2.21457 6.71952 2.12364 6.67635 2.03736C6.64554 1.97109 6.61008 1.90944 6.58542 1.84779L6.3219 1.3608C6.28491 1.29453 6.34656 1.21593 6.41898 1.23597L8.06799 1.68288H8.07261C8.07567 1.68288 8.07723 1.68444 8.07876 1.68444L8.29605 1.74453L8.53494 1.81236L8.62278 1.83699V0.85686C8.62278 0.38373 9.00189 0 9.4704 0C9.70464 0 9.91731 0.0955498 10.0699 0.25119C10.2224 0.40686 10.318 0.61953 10.318 0.85686V2.31168L10.4937 2.36097C10.5076 2.36562 10.5214 2.37177 10.5338 2.38101C10.5769 2.41338 10.6385 2.46114 10.7171 2.51973C10.7788 2.56902 10.8451 2.62914 10.9252 2.69079C11.0839 2.81868 11.2735 2.98359 11.4815 3.17316C11.537 3.22092 11.591 3.27024 11.6403 3.31956C11.9084 3.56922 12.209 3.86202 12.4956 4.18566C12.5757 4.27659 12.6543 4.36905 12.7345 4.46613C12.8146 4.56477 12.8994 4.66185 12.9733 4.75896C13.0704 4.88841 13.1752 5.02248 13.2662 5.16273C13.3093 5.229 13.3586 5.2968 13.4002 5.36307C13.5173 5.54028 13.6206 5.7237 13.7192 5.90709C13.7609 5.99184 13.804 6.0843 13.841 6.17523C13.9504 6.42027 14.0367 6.66993 14.0922 6.91959C14.1091 6.97353 14.1215 7.03209 14.1276 7.0845V7.09683C14.1461 7.17078 14.1523 7.24938 14.1584 7.32951C14.1831 7.58535 14.1708 7.84116 14.1153 8.09853C14.0922 8.20797 14.0614 8.3112 14.0244 8.42064C13.9874 8.52543 13.9504 8.63484 13.9026 8.7381C13.8102 8.9523 13.7007 9.16653 13.5713 9.36687C13.5297 9.44085 13.4804 9.51945 13.431 9.59343C13.3771 9.672 13.3216 9.74598 13.2723 9.81843C13.2045 9.91089 13.1321 10.008 13.0581 10.0943C12.9918 10.1852 12.924 10.2761 12.8501 10.3563C12.7468 10.478 12.6482 10.5936 12.5449 10.7046C12.4833 10.777 12.417 10.851 12.3492 10.9172C12.2829 10.9912 12.2151 11.0575 12.1535 11.1191C12.0502 11.2224 11.9639 11.3025 11.8915 11.3688L11.722 11.5244C11.6973 11.546 11.6649 11.5583 11.631 11.5583H10.318V13.2428H11.9701C12.3399 13.2428 12.6913 13.1118 12.9749 12.8714C13.072 12.7866 13.4958 12.4198 13.9966 11.8666C14.0136 11.8481 14.0352 11.8342 14.0598 11.828L18.623 10.5089C18.7078 10.4842 18.7941 10.5489 18.7941 10.6383Z"
                  fill="white"
                  className="fill-purple"
                />
              </svg>
            </a>
            <a
              target="_blank"
              href="https://www.discord.gg/"
              rel="noopener noreferrer"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 22 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.31874 1.24455C4.74218 0.655511 6.24808 0.236972 7.79662 0C7.98951 0.30842 8.21487 0.723245 8.37029 1.05326C10.0399 0.831226 11.6941 0.831226 13.3331 1.05326C13.4884 0.72332 13.7188 0.30842 13.9135 0C15.4636 0.237082 16.9708 0.656686 18.3949 1.24763C21.2288 5.03512 21.997 8.72844 21.6129 12.3695C19.7333 13.6109 17.9118 14.365 16.1209 14.8585C15.6758 14.3172 15.2824 13.7441 14.9447 13.1451C15.5877 12.9286 16.2075 12.6618 16.7969 12.3479C16.6418 12.2462 16.4904 12.1403 16.3428 12.0302C12.7714 13.5076 8.89096 13.5076 5.36216 12.0302C5.21395 12.1395 5.06256 12.2455 4.90813 12.3479C5.49845 12.6627 6.11948 12.93 6.76376 13.1467C6.42411 13.7481 6.03138 14.3218 5.58752 14.86C3.79498 14.3666 1.97174 13.6125 0.0921211 12.3695C-0.358601 8.14864 0.861979 4.48915 3.31874 1.24448V1.24455ZM14.4581 10.1303C15.5302 10.1303 16.4094 9.24509 16.4094 8.16716C16.4094 7.08923 15.5489 6.20251 14.4581 6.20251C13.3671 6.20251 12.488 7.08766 12.5067 8.16716C12.505 9.24509 13.3671 10.1303 14.4581 10.1303ZM7.24696 10.1303C8.31908 10.1303 9.19822 9.24509 9.19822 8.16716C9.19822 7.08923 8.33781 6.20251 7.24696 6.20251C6.15602 6.20251 5.27687 7.08766 5.29561 8.16716C5.29561 9.24509 6.15602 10.1303 7.24696 10.1303Z"
                  fill="white"
                  className=" fill-black hover:fill-green"
                />
              </svg>
            </a>
            <a
              target="_blank"
              href="https://twitter.com/"
              rel="noopener noreferrer"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.43 15.8229C7.908 15.8322 9.37313 15.5479 10.7404 14.9866C12.1077 14.4253 13.3499 13.5981 14.3951 12.553C15.4402 11.5078 16.2674 10.2656 16.8287 8.89832C17.39 7.53103 17.6743 6.06589 17.665 4.58789V4.07164C18.4311 3.51032 19.0943 2.82054 19.625 2.03289C18.9036 2.34841 18.1402 2.55767 17.3587 2.65414C18.1873 2.16045 18.809 1.38335 19.1087 0.466643C18.3366 0.929904 17.4898 1.25557 16.6062 1.42914C16.0112 0.795089 15.2238 0.374817 14.3658 0.233356C13.5078 0.091895 12.6271 0.23713 11.86 0.646591C11.0929 1.05605 10.4821 1.70691 10.1222 2.49846C9.7622 3.29001 9.67313 4.17813 9.86875 5.02539C8.29902 4.94834 6.76312 4.54154 5.36106 3.83146C3.959 3.12139 2.72222 2.12396 1.73125 0.904143C1.23156 1.77142 1.0801 2.79618 1.30754 3.77093C1.53498 4.74567 2.12433 5.59758 2.95625 6.15414C2.34254 6.13047 1.74302 5.96261 1.20625 5.66414V5.70789C1.2008 6.61425 1.50613 7.4951 2.07137 8.20363C2.6366 8.91216 3.42759 9.40558 4.3125 9.60164C3.74168 9.75517 3.14376 9.77909 2.5625 9.67164C2.81869 10.4446 3.30772 11.1194 3.96254 11.6035C4.61736 12.0875 5.40589 12.3572 6.22 12.3754C4.82806 13.4959 3.09808 14.1126 1.31125 14.1254C0.997959 14.1163 0.685404 14.09 0.375 14.0466C2.18359 15.1989 4.28555 15.8064 6.43 15.7966"
                  fill="white"
                  className="fill-black hover:fill-green"
                />
              </svg>
            </a>
          </div>
        </div>
      </header>

      <div className=" justify-center items-center flex flex-col bg-purple min-h-screen min-w-screen">
        {/* Banner */}
        <div className="grid grid-cols-2 md:grid-cols-3 md:px-14 2xl:px-36 pt-20 justify-center items-center mb-20 2xl:mb-48">
          <div className="col-span-2 mx-14 items-center 2xl-ml-10">
            <p className=" text-2xl md:text-6xl font-bold mt-5 2xl:text-9xl text-center md:text-left">
              Welcome to the Perfect Match Society!
            </p>
            <p className="md:text-xl font-bold mt-6 md:mr-16 text-center md:text-left">
              Welcome to the Perfect Match Society. A collection of 10,000 PMS
              living on the Ethereum Blockchain and inspired by Doodles x Cool
              Cats x WGMInterface. They are randomly generated and composed of a
              variety of hand-drawn traits
            </p>
            <div className="mt-10 flex flex-col md:flex-row justify-center md:justify-start  items-center">
              <a className=" bg-black px-7  md:px-10 py-4 2xl:py-6 2xl:px-16 2xl:text-lg rounded-full text-white font-bold hover:bg-green hover:text-purple text-center">
                {" "}
                MINT 0.01 ETH
              </a>
              <a className="text-black font-bold text-lg md:ml-12 2xl:text-3xl">
                {" "}
                10,000/ 10,000 left
              </a>
            </div>
          </div>
          <div className="hidden md:flex  flex-row md:items-start  items-center">
            <Image
              src={icon}
              objectFit="fill"
              // width={450}
              // height={450}
              className="bg-green rounded-3xl hover:bg-yellow"
            />
          </div>
          <div className="flex mx-auto flex-row justify-center items-center ml-10 mt-10">
            <div className="md:hidden flex  flex-row md:items-start  items-center">
              <Image
                src={icon}
                layout="fixed"
                objectFit="contain"
                width={350}
                height={350}
                className="bg-green rounded-3xl hover:bg-yellow"
              />
            </div>
          </div>
        </div>
        {/* Banner */}
        {/* Strip */}
        <Image src={strip} objectFit="fill" />
        {/* Strip */}
        {/* Roadmap */}
        <div className="flex flex-col items-center mt-20 min-w-screen">
          <p className=" text-6xl font-bold mt-5">Roadmap</p>
          <div className=" bg-pink border-8 rounded-3xl border-white mt-6 2xl:px-20 pb-4 hover:bg-gray-100 hover:scale-105 transision transform duration-200 ease-out">
            <div className="container bg-gray-200 mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden pt-10 px-10 h-full">
                <div className=" border-2-2 mt-14 absolute border-dashed border-2 border-black h- ml-3"></div>

                <div className="mb-8 top-0 flex justify-start items-center w-full">
                  <div className="order-2 w-12/12"></div>
                  <div className="z-20">
                    <div className="h-7 w-7 bg-black rounded-full -mt-20 md:-mt-18"></div>
                  </div>
                  <div className="order-1 ml-10 mt-8">
                    <div className="flex flex-row">
                      <h3 className="mb-3 font-bold underline  text-xl  md:text-3xl">
                        Pre-Launch / Mint Phase
                      </h3>
                    </div>
                    <ul className="list-disc md:text-lg ">
                      <li>Building the Perfect Match Society</li>
                      <li>Sneak Peeks</li>
                      <li>Whitelisting</li>
                      <li>10 000 collection, 0.01 ETH</li>
                      <li>Private Sale 24h (Whitelist)</li>
                      <li>Public Sale</li>
                    </ul>
                  </div>
                </div>

                <div className="  top-0 flex justify-start items-start w-full">
                  <div className="order-2 w-12/12"></div>
                  <div className="z-20">
                    <div className="h-7 w-7 bg-black rounded-full"></div>
                  </div>
                  <div className="order-1 ml-10 -mt-2 ">
                    <div className="flex flex-row">
                      <h3 className="mb-3 font-bold underline   text-xl  md:text-3xl">
                        Post Launch Phase
                      </h3>
                    </div>
                    <div className="flex flex-col justify-center items-center ">
                      <ul className="list-disc md:text-lg ">
                        <li>Reward our community </li>
                        <li>
                          Sweep Floors (Perfect Match and other projects...){" "}
                        </li>
                        <li>Society Bank (Community Funds) </li>
                        <li>5% Royalties to Society Bank </li>
                        <li>Giveaways, Art Contests, Meme Contest... </li>
                        <li>Twitter Spaces, AMAs, and Community Games!</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mb-8 top-0 flex justify-start items-start w-full mt-2 md:mt-2">
                  <div className="order-2 w-12/12"></div>
                  <div className="z-20">
                    <div className="h-7 w-7 bg-black rounded-full mt-12"></div>
                  </div>
                  <div className="order-1 ml-10 -mt-4 md:mt-8 ">
                    <div className="flex flex-row">
                      <h3 className="mb-3 font-bold underline  text-xl  md:text-3xl">
                        Third Phase (Roadmap Part II)
                      </h3>
                    </div>
                    <div className="flex flex-col justify-center items-left">
                      <ul className="list-disc md:text-lg ">
                        <li>New marketing plans</li>
                        <li>Hire new talents in the team</li>
                        <li>Merch for the community</li>
                        <li>Collaboration with brands</li>
                        <li>Perfect Match Society meetup!</li>
                        {/* <li>Royalties to the community funds (5%)</li>
                        <li>Instant Reveal</li>
                        <li>Marketing</li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Roadmap */}

        {/* FAQs */}
        <div className="flex relative flex-col items-center min-w-screen mb-10 mt-10">
          {/* <h1 className="text-white font-angkor text-4xl mt-16">FAQs</h1> */}
          <p className=" text-6xl font-bold mt-5">FAQs</p>
          <div className="flex min-w-screen relative flex-col py-10">
            {/* FAQ1 */}
            <div className=" border-r-blue border-r-8 border-b-blue border-b-8 shadow-md md:w-[900px] 2xl:w-[1400px]">
              <div className="tab w-full overflow-hidden border border-1 border-blue py-3 ">
                <input
                  className="absolute opacity-0 "
                  id="tab-multi-one"
                  type="checkbox"
                  name="tabs"
                />
                <label
                  className="block p-5 leading-normal cursor-pointer text-black font-bold text-xl md:text-2xl"
                  htmlFor="tab-multi-one"
                >
                  1. How many PMS are there?
                </label>
                <div className="tab-content overflow-hidden   leading-normal">
                  <p className="p-5 text-black text-lg">
                    There will be 10,000 PMS
                  </p>
                </div>
              </div>
            </div>
            {/* FAQ1 */}

            {/* FAQ2 */}
            <div className=" border-r-yellow border-r-8 border-b-yellow border-b-8 shadow-md md:w-[900px] 2xl:w-[1400px]">
              <div className="tab w-full overflow-hidden border border-1 border-yellow">
                <input
                  className="absolute opacity-0 "
                  id="tab-multi-two"
                  type="checkbox"
                  name="tabs"
                />
                <label
                  className="block p-5 leading-normal cursor-pointer text-black font-bold text-xl md:text-2xl"
                  htmlFor="tab-multi-two"
                >
                  2. How much will it cost?
                </label>
                <div className="tab-content overflow-hidden   leading-normal">
                  <p className="p-5 text-black text-lg">
                    It will cost 0.01 to mint a PMS
                  </p>
                </div>
              </div>
            </div>
            {/* FAQ2 */}

            {/* FAQ3 */}
            <div className=" border-r-pink border-r-8 border-b-pink border-b-8 shadow-md md:w-[900px] 2xl:w-[1400px]">
              <div className="tab w-full overflow-hidden border border-1 border-pink">
                <input
                  className="absolute opacity-0 "
                  id="tab-multi-three"
                  type="checkbox"
                  name="tabs"
                />
                <label
                  className="block p-5 leading-normal cursor-pointer text-black font-bold text-xl md:text-2xl"
                  htmlFor="tab-multi-three"
                >
                  3. Wen reveal?
                </label>
                <div className="tab-content overflow-hidden   leading-normal">
                  <p className="p-5 text-black text-lg">
                    PMS will be INSTANT reveal on mint
                  </p>
                </div>
              </div>
            </div>
            {/* FAQ3 */}

            {/* FAQ4 */}
            <div className=" border-r-green border-r-8 border-b-green border-b-8 shadow-md md:w-[900px] 2xl:w-[1400px]">
              <div className="tab w-full overflow-hidden border border-1 border-green">
                <input
                  className="absolute opacity-0 "
                  id="tab-multi-four"
                  type="checkbox"
                  name="tabs"
                />
                <label
                  className="block p-5 leading-normal cursor-pointer text-black font-bold text-xl md:text-2xl"
                  htmlFor="tab-multi-four"
                >
                  4. When is launch?
                </label>
                <div className="tab-content overflow-hidden   leading-normal">
                  <p className="p-5 text-black text-lg">15 January 2022</p>
                </div>
              </div>
            </div>
            {/* FAQ4 */}

            {/* FAQ5 */}
            <div className=" border-r-blue border-r-8 border-b-blue border-b-8 shadow-md md:w-[900px] 2xl:w-[1400px]">
              <div className="tab w-full overflow-hidden border border-1 border-blue">
                <input
                  className="absolute opacity-0 "
                  id="tab-multi-five"
                  type="checkbox"
                  name="tabs"
                />
                <label
                  className="block p-5 leading-normal cursor-pointer text-black font-bold text-xl md:text-2xl"
                  htmlFor="tab-multi-five"
                >
                  5. How do I purchase a PMS?
                </label>
                <div className="tab-content overflow-hidden   leading-normal">
                  <p className="p-5 text-black text-lg">
                    You cant mint from our website or buy directly from OpenSea
                  </p>
                </div>
              </div>
            </div>
            {/* FAQ5 */}

            {/* FAQ6 */}
            <div className=" border-r-yellow border-r-8 border-b-yellow border-b-8 shadow-md md:w-[900px] 2xl:w-[1400px]">
              <div className="tab w-full overflow-hidden border border-1 border-yellow">
                <input
                  className="absolute opacity-0 "
                  id="tab-multi-six"
                  type="checkbox"
                  name="tabs"
                />
                <label
                  className="block p-5 leading-normal cursor-pointer text-black font-bold text-xl md:text-2xl"
                  htmlFor="tab-multi-six"
                >
                  6. Are some PMS more rare than others?
                </label>
                <div className="tab-content overflow-hidden   leading-normal">
                  <p className="p-5 text-black text-lg">
                    Every PMS has unique traits/attributes, but some traits are
                    more rare than others.
                  </p>
                </div>
              </div>
            </div>
            {/* FAQ6 */}
          </div>
        </div>
        {/* FAQs */}
      </div>
    </div>
  );
}
