import Navbar from '@/components/marketing/Navbar';
import Footer from '@/components/marketing/Footer';
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default AuthLayout;
