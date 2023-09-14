import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ProgressBar from "@/components/progress-bar";



const MainLayout = ({ children }:{
    children: React.ReactNode
 }) => {
 
     return(
         <div>
            <Navbar/>
           <ProgressBar/>
             {children}
             <Footer/>
         </div>
     )
 }
 
 export default MainLayout;