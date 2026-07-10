import Header from './Header';
import Footer from './Footer';

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[1440px] mx-auto bg-page relative overflow-hidden">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
