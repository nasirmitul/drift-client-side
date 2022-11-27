import { useState } from "react";
import SyncLoader from "react-spinners/SyncLoader";


const Spinner = () => {
    let [loading, setLoading] = useState(true);
    return (
        <div className="sweet-loading">

            <div className="loader">
                <SyncLoader
                    color={"#42A5FD"}
                    loading={loading}
                    size={10}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>
        </div>
    );
};

export default Spinner;