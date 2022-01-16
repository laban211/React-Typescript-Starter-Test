import { Col, Row } from "antd";
import { GridLoader } from "react-spinners";
import { maxContentWidth } from "../constants/commonStyle";
import { ResultError } from "./ResultError";

interface Props<T> {
  data: T[];
  renderItem: (item: T) => JSX.Element;
  isLoading?: boolean;
  isError?: boolean;
  refetchData: () => void;
}

const ContentContainer = <T,>(props: Props<T>) => {
  const renderItem = (item: T, key: number) => (
    <Col key={key} xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
      {props.renderItem(item)}
    </Col>
  );

  const renderLoading = () => (
    <Row justify="center" align="middle" style={{ height: "100%" }}>
      <GridLoader size={50} />
    </Row>
  );

  const renderError = () => <ResultError retryAction={props.refetchData} />;

  return (
    <Row justify="center">
      {props.isError ? (
        renderError()
      ) : props.isLoading ? (
        renderLoading()
      ) : (
        <Row gutter={[16, 16]} wrap style={{ maxWidth: maxContentWidth }}>
          {props.data.map(renderItem)}
        </Row>
      )}
    </Row>
  );
};

export { ContentContainer };
