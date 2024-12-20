import { Outlet } from "react-router-dom"
import Footer from "../Component/Footer"


export default function Layout()
{
    return(<div>
         <Outlet />
         <Footer/>
    </div>)
}