import { Redirect } from '@reach/router';
import React from 'react';
import { Auth } from '../../App';

interface IOwnProps {
  component: React.ElementType;
  layout: React.ElementType;
  path: string;
  publicPath?: boolean;
}

type IProps = IOwnProps;

const RouteWithLayout: React.FC<IProps> = ({
  layout: Layout,
  component: Component,
  publicPath,
  ...rest
}) => {
  const { user } = Auth.useContainer();
  const isAuth = user || publicPath;
  return (
    <Layout>
      {isAuth ? (
        <Component {...rest} />
      ) : (
        <Redirect from="" to="/sign-in" noThrow />
      )}
    </Layout>
  );
};

export default RouteWithLayout;
