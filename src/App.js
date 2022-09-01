import './App.css';
import { Layout } from 'antd';
import Header from './components/Header'
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
// import { Content } from 'antd/lib/layout/layout';
const {Content} = Layout;

function App() {
  return (
    <Layout>
      <Header/>
      <Content>
        <Outlet/>
      </Content>
      <Footer/>
    </Layout>
  );
}

export default App;
