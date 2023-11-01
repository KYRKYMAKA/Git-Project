import React from "react";

function SomeForm() {
    const [sosi, setSosi] = useState(true);

    const isLoading = true;

    return <form>{isLoading && <div>Sosi</div>}</form>;
}

export default SomeForm;
