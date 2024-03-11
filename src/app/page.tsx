"use client";

import { useAPIService } from "@/api/useAPIService";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { IProductSectionContent, ISliderContent } from "@/types/types";
import { handleSanitize } from "@/utils/sanitize";
import { Carousel, message } from "antd";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const { getSliderContent, getPlatformSection } = useAPIService();

  const [sliderContent, setSliderContent] = useState<ISliderContent[]>();
  const [platformSectionData, setPlatformSectionData] =
    useState<IProductSectionContent[]>();

  const contentStyle: React.CSSProperties = {
    height: "70vh",
    textAlign: "center",
    backgroundSize: "cover",
  };

  const fetchSliderContent = useCallback(async () => {
    try {
      const response = await getSliderContent();
      setSliderContent(response);
    } catch {
      message.error("Error fetching data");
    }
  }, [getSliderContent]);

  const fetchPlatformSectionContent = useCallback(async () => {
    try {
      const response = await getPlatformSection();
      setPlatformSectionData(response);
    } catch {
      message.error("Error fetching data");
    }
  }, [getPlatformSection]);

  useEffect(() => {
    fetchSliderContent();
    fetchPlatformSectionContent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />
      <main className="flex min-h-[calc(100vh-56px)] flex-col items-center justify-between w-full gap-10 pb-10">
        <div className="w-[99vw] flex flex-col gap-10">
          {/* Slider  */}
          {sliderContent && (
            <Carousel autoplay>
              {sliderContent.map((contentItem, index) => (
                <div key={index}>
                  <div
                    key={index}
                    className="relative flex items-center justify-center "
                    style={{
                      ...contentStyle,
                      backgroundImage: `url("${contentItem.image}")`,
                    }}
                  >
                    <div className="absolute inset-0 bg-black opacity-40 h-[70vh]"></div>
                    <div className="flex flex-col items-center justify-center gap-6">
                      <span className="relative z-10 text-[4rem] font-extrabold text-white">
                        {contentItem.title}
                      </span>
                      <span className="relative z-10 text-2xl text-white">
                        {contentItem.subtitle}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          )}

          {/* Content */}
          <div className="px-10 flex flex-col gap-10">
            {platformSectionData &&
              platformSectionData.length > 0 &&
              platformSectionData.map((item, index) => {
                const sanitizedHTML = handleSanitize(item.text_content);

                return (
                  <div key={index}>
                    <h1>{item.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
                  </div>
                );
              })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
