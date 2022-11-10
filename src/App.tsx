import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Initial from './routes/Home/Initial';
import Promotion from './routes/Home/Promotion';
import Subscription from './routes/Home/Subscription';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Initial />} />
          <Route path="promotion" element={<Promotion />} />
          <Route path="sub" element={<Subscription />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
