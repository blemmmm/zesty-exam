"use client";

import { useAPIService } from "@/api/useAPIService";
import AccordionCard from "@/components/AccordionCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { IProductSectionContent } from "@/types/types";
import { handleSanitize } from "@/utils/sanitize";
import {
  CommentOutlined,
  FireOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import { CollapseProps, message } from "antd";
import { useCallback, useEffect, useState } from "react";

const Faqs = () => {
  const { getPlatformSection } = useAPIService();

  const [platformSectionData, setPlatformSectionData] = useState<
    IProductSectionContent[]
  >([]);

  const fetchPlatformSectionContent = useCallback(async () => {
    try {
      const response = await getPlatformSection();
      setPlatformSectionData(response);
    } catch {
      message.error("Error fetching data");
    }
  }, [getPlatformSection]);

  const accordionItemsGroupOne: CollapseProps["items"] = platformSectionData
    .slice(0, 3)
    .map((item, index) => {
      return {
        key: index,
        label: item.title,
        className: "bg-slate-50 rounded-t-lg hover:bg-white",
        children: (
          <div
            dangerouslySetInnerHTML={{
              __html: handleSanitize(item.text_content),
            }}
          />
        ),
      };
    });

  const accordionItemsGroupTwo: CollapseProps["items"] = platformSectionData
    .slice(4, 10)
    .map((item, index) => {
      return {
        key: index,
        label: item.title,
        className: "bg-slate-50 rounded-t-lg hover:bg-white",
        children: (
          <div
            dangerouslySetInnerHTML={{
              __html: handleSanitize(item.text_content),
            }}
          />
        ),
      };
    });

  const accordionItemsGroupThree: CollapseProps["items"] = platformSectionData
    .slice(11, 15)
    .map((item, index) => {
      return {
        key: index,
        label: item.title,
        className: "bg-slate-50 rounded-t-lg hover:bg-white",
        children: (
          <div
            dangerouslySetInnerHTML={{
              __html: handleSanitize(item.text_content),
            }}
          />
        ),
      };
    });

  useEffect(() => {
    fetchPlatformSectionContent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Navbar />
      <main className="flex min-h-[calc(100vh-56px)] flex-col items-center w-full gap-10 pb-10 pt-10">
        <h2>Frequently Asked Questions</h2>
        <div className="px-[20vw] w-full flex flex-col gap-10">
          <AccordionCard
            title={
              <>
                <CommentOutlined /> FAQ Group 1
              </>
            }
            accordionItems={accordionItemsGroupOne}
          />
          <AccordionCard
            title={
              <>
                <NotificationOutlined /> FAQ Group 2
              </>
            }
            accordionItems={accordionItemsGroupTwo}
          />
          <AccordionCard
            title={
              <>
                <FireOutlined /> FAQ Group 3
              </>
            }
            accordionItems={accordionItemsGroupThree}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Faqs;
