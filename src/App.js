import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./routes/HomePage";
import Page2025 from "./routes/Page2025";
import Page2026 from "./routes/Page2026";
import GallaryPage from "./routes/GallaryPage";
import ApplyPage from "./routes/ApplyPage";
import CommunityPage from "./routes/CommunityPage";
import NoticePage from "./routes/NoticePage";
import WritePage from "./routes/WritePage";
import DashboardPage from "./routes/DashboardPage";
import NoticeDetailPage from "./routes/NoticeDetailPage";
import AdminLoginPage from "./routes/AdminLoginPage";
import EditPage from "./routes/EditPage";
import BannerPage from "./routes/BannerPage";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/2025" element={<Page2025 />}></Route>
        <Route path="/2026" element={<Page2026 />}></Route>
        <Route path="/gallary" element={<GallaryPage />}></Route>
        <Route path="/apply" element={<ApplyPage />}></Route>
        <Route path="/community" element={<CommunityPage />}></Route>
        <Route path="/notice" element={<NoticePage />}></Route>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/admin" element={<AdminLoginPage />} />
        <Route path="/notice/:id" element={<NoticeDetailPage />} />
        <Route path="/edit/:id" element={<EditPage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/banner" element={<BannerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
