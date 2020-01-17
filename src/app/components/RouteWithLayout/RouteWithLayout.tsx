import React from 'react';
import { Route } from 'react-router-dom';
import { RouteComponentProps } from '@reach/router';

interface IOwnProps {
  component: React.ElementType;
  layout: React.ElementType;
  path: string;
}

type IProps = IOwnProps & RouteComponentProps

const RouteWithLayout: React.FC<IProps> = ({ layout: Layout, component: Component, ...rest }) => {

  return (
        <Layout>
          <Component {...rest} />
        </Layout>
  );
  // return (
  //   <Route
  //     {...rest}
  //     render={(matchProps): React.ReactElement => (
  //       <Layout>
  //         <Component {...matchProps} />
  //       </Layout>
  //     )}
  //   />
  // );
};

export default RouteWithLayout;