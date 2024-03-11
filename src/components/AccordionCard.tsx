import { Collapse, CollapseProps } from "antd";

interface Props {
  title: React.ReactNode;
  accordionItems: CollapseProps["items"];
}

const AccordionCard = ({ title, accordionItems }: Props) => {
  return (
    <div className="w-full rounded-lg bg-slate-50 p-4">
      <h3 className="text-2xl font-bold flex items-center gap-3">{title}</h3>
      <Collapse items={accordionItems} />
    </div>
  );
};

export default AccordionCard;
