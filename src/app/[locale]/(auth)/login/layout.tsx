import Navbar from '@/components/marketing/Navbar';
import Footer from '@/components/marketing/Footer';
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default AuthLayout;
