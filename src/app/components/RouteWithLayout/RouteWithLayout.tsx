import React from 'react';
import { Route } from 'react-router-dom';

interface IProps {
  component: React.ElementType;
  layout: React.ElementType;
  path: string;
}

const RouteWithLayout: React.FC<IProps> = ({ layout: Layout, component: Component, ...rest }) => {

  return (
    <Route
      {...rest}
      render={(matchProps): React.ReactElement => (
        <Layout>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
};

RouteWithLayout.propTypes = {
  
};

export default RouteWithLayout;
