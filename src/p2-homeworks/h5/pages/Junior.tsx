import React from "react";
import HW6 from "../../h6/HW6";
import HW7 from "../../h7/HW7";
import HW8 from "../../h8/HW8";
import HW9 from "../../h9/HW9";
import HW10 from "../../h10/HW10";
import {useSelector} from "react-redux";
import {AppStoreType} from "../../h10/bll/store";

const Junior: React.FC = () => {
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.loading)
    return (
        loading
            ? <HW10/>

            : <div>
                <HW6/>
                <HW7/>
                <HW8/>
                <HW9/>
                <HW10/>
            </div>
    )
}

export default Junior