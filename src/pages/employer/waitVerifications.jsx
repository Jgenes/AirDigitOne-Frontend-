import TopBar from "../../components/TopBar";
import Footer from "../../components/Footer";
export default function WaitVerifications() {
  return (
    <>
      <TopBar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md text-center">
          <h2 className="text-2xl font-bold mb-4">Verification Pending</h2>
          <p className="mb-6">Your employer account is under review. Please wait for verification.</p>
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16 mx-auto"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}   