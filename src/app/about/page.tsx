/* eslint-disable @next/next/no-img-element */
"use client";

import { useAPIService } from "@/api/useAPIService";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { IAboutContent } from "@/types/types";
import { handleSanitize } from "@/utils/sanitize";
import { message } from "antd";
import { useCallback, useEffect, useMemo, useState } from "react";

const About = () => {
  const { getAboutContent } = useAPIService();
  const [aboutContent, setAboutContent] = useState<IAboutContent[]>();

  const aboutContentMemo = useMemo(() => {
    if (aboutContent && aboutContent.length > 0) {
      return aboutContent[0];
    }
  }, [aboutContent]);

  const sanitizedHeroContent = aboutContentMemo
    ? handleSanitize(aboutContentMemo.hero_content)
    : "";
  const sanitizedPageContent = aboutContentMemo
    ? handleSanitize(aboutContentMemo.page_content)
    : "";

  const fetchAboutContent = useCallback(async () => {
    try {
      const response = await getAboutContent();
      setAboutContent(response);
    } catch {
      message.error("Error fetching data");
    }
  }, [getAboutContent]);

  useEffect(() => {
    fetchAboutContent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div>
        <Navbar />
        <main className="min-h-[calc(100vh-56px)] flex flex-col items-center justify-start w-full gap-10 pb-10">
          {/* Hero Image */}
          <div className="w-full overflow-hidden">
            <img
              src={aboutContentMemo?.hero_image}
              alt="hero-image"
              className="w-full h-[78vh] object-cover"
            />
          </div>

          {/* Hero Content */}
          <div className="text-center mt-4">
            <div
              dangerouslySetInnerHTML={{ __html: sanitizedHeroContent }}
              className="text-4xl font-bold"
            />
          </div>

          {/* Page Content */}
          <div className="grid grid-cols-3 px-40 ">
            <div className="flex items-center justify-end pr-10 col-span-1">
              <h3 className="m-0 text-2xl font-bold">
                {aboutContentMemo?.title}
              </h3>
            </div>

            <div className="flex flex-col gap-4 border-0 border-l border-gray-300 pl-10 col-span-2">
              <div
                dangerouslySetInnerHTML={{ __html: sanitizedPageContent }}
                className="flex flex-col gap-2 text-sm"
              />
            </div>
          </div>

          <div className="w-full flex items-center justify-center">
            <div className="flex items-center gap-4">
              {aboutContentMemo?.story_logos.map((item, index) => (
                <img
                  src={item}
                  alt="hero-image"
                  className="w-full"
                  key={index}
                />
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default About;
