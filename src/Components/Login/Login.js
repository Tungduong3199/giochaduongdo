import React, {useState} from 'react';
import Header from "../Home/Header/Header";
import Footer from "../Home/Footer/Footer";
import Sign_In from "./Sign_In";
import Sign_Up from "./Sign_Up";

function Login(props) {
    // const [show, setShow] = useState(false)
    return (
        <div>
            <Header/>
            {/*{show*/}
                 <Sign_Up/>
                {/*: <Sign_In setShow={setShow}/>*/}
            {/*}*/}
            <Footer/>
        </div>
    );
}

export default Login;