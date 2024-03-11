import { message } from "antd";

export const useAPIService = () => {
  const getSliderContent = async () => {
    try {
      const response = await fetch("https://www.zesty.io/-/gql/features.json", {
        method: "GET",
      });
      const data = await response.json();
      return data;
    } catch {
      message.error("Error fetching data");
    }
  };

  const getPlatformSection = async () => {
    try {
      const response = await fetch(
        "https://www.zesty.io/-/gql/platform_section.json",
        {
          method: "GET",
        }
      );
      const data = await response.json();
      return data;
    } catch {
      message.error("Error fetching data");
    }
  };

  const getAboutContent = async () => {
    try {
      const response = await fetch("https://www.zesty.io/-/gql/about.json", {
        method: "GET",
      });
      const data = await response.json();
      return data;
    } catch {
      message.error("Error fetching data");
    }
  };

  return {
    getSliderContent,
    getPlatformSection,
    getAboutContent,
  };
};
