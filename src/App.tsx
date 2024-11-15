import { Layout } from 'antd';
import React from 'react';

import { FilterButton } from './components/Button';
import { ContentContainer } from './components/Container';

const { Content } = Layout;
const App: React.FC = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content style={{ padding: '10px 50px' }}>
        <ContentContainer>
          <FilterButton />
        </ContentContainer>
      </Content>
    </Layout>
  );
};

export default App;