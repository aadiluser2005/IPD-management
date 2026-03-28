import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admit from "./AdmitPage/Admit.jsx";
import Manage from "./ManagePage/Manage.jsx";
import Records from "./RecordsPage/Records.jsx";
import Navbar from "./Navbar.jsx";
import ManageForm from "./ManagePage/ManageForm.jsx";
import { Toaster } from "sonner";
import Advance from "./ManagePage/AdvanceReceipt/Advance.jsx";

function App() {
  return (
    <>
     <Toaster position="top-center" richColors />

      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Admit />} />
          <Route path="/manage" element={<Manage />} />
          <Route path="/manage/patient" element={<ManageForm />} />
          <Route path ="/manage/advanceReceipt" element={<Advance></Advance>} ></Route>
          <Route path="/records" element={<Records />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;