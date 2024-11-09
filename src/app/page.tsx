import { AppDownloadButton } from "@/components/download-button";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import Phone from "@/components/phone";

export default function Page() {
  return (
    <div className="bg-slate-50 grainy-light">
      <section>
        <MaxWidthWrapper className="  lg:grid lg:grid-cols-3 lg:gap-x-0 xl:gap-x-8 py-10 ">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                {/* i forgot this div right here in the video, it's purely visual gradient and looks nice */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t via-slate-50/50 from-slate-50 h-28" />
                <img src="/snake-1.png" className="w-full" />
              </div>
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                Empowering{" "}
                <span className="bg-[#066b3a] px-2 text-white">
                  {" "}
                  E-commerce
                </span>{" "}
                in Algeria
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                we are revolutionizing the e-commerce landscape in Algeria by
                offering comprehensive solutions that simplify transactions
                between stores, delivery companies, and customers.
              </p>

              <AppDownloadButton
                apkUrl="https://utfs.io/f/A2HLI5SDeaS1KbzdgKfDHdf8yG6gWJZ1LvORSM5lz4YNoiEx"
                appName="jethings store"
                version="1.0.0"
              />
            </div>
          </div>

          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl">
              <Phone />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
