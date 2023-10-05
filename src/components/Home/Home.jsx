import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthProvider";

const Home = () => {
    const authInfo = useContext(AuthContext);
    return (
        <div>
            <h1 className="text-2xl text-center font-bold">{authInfo.name}</h1>
        </div>
    );
};

export default Home;