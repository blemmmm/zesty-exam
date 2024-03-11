import DOMPurify from "dompurify";

export const handleSanitize = (content: string) => {
  return DOMPurify.sanitize(content);
};
