import React from 'react';
import {Hearts} from "react-loader-spinner";

const CustomLoader = ({loading}) => {


    return (
            <Hearts
                height="300"
                width="200"
                color="red"
                ariaLabel="hearts-loading"
                wrapperStyle={{}}
                wrapperClass="justify-content-center"
                visible={loading}
            />
        );
};

export default CustomLoader;
