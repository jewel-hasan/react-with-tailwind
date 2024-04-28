import { useEffect, useState } from "react";


const Models = () => {

    const [models, setModels] = useState([]);
    useEffect(() => {
        fetch('header.json')
        .then(rest => rest.json())
        .then(data => console.log(data))

    },[])
    return (
        <div>
                   

        </div>
    );
};

export default Models;