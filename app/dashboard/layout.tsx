import Footer from "./Footer";
import Header from "./Header"
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";


export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode,
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <Header/>
      <div className="flex ">
    
      <NavBar/>
       <div className="p-5 md:ml-[240px]">
      {children}
      </div>
      <Sidebar/>
      </div>
     
    </section>
  );
}