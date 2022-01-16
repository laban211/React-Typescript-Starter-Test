import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import { appPaths } from "../AppRouter";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <Menu mode="horizontal" selectedKeys={[pathname]}>
      <Link to={appPaths.sports}>
        <Menu.Item key={appPaths.sports}>Sports</Menu.Item>
      </Link>
      <Link to={appPaths.food}>
        <Menu.Item key={appPaths.food}>Food</Menu.Item>
      </Link>
    </Menu>
  );
};

export { Header };
