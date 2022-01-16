import { Card, CardProps } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

interface ContentCardProps extends CardProps {
  description: string;
  deleteAction?: () => void;

  // Note: title is not an optional prop in this component
  title: string;
}

const ContentCard = (props: ContentCardProps) => {
  return (
    <Card
      hoverable
      {...props}
      title={null}
      actions={
        props.deleteAction
          ? [<DeleteOutlined onClick={() => props.deleteAction?.()} />]
          : []
      }
      style={{ ...props.style }}
    >
      <Card.Meta title={props.title} description={props.description} />
    </Card>
  );
};

export { ContentCard };
