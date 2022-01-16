import { Button, Result } from "antd";

interface Props {
  retryAction: () => void;
}

const ResultError = (props: Props) => {
  return (
    <Result
      status="error"
      title="There was an error.."
      extra={
        props.retryAction ? (
          <Button onClick={props.retryAction}>Retry</Button>
        ) : undefined
      }
    />
  );
};

export { ResultError };
