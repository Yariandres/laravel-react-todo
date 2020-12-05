import React, { useState } from "react";

export const AddItemForm = () => {
    const [item, setItem] = useState("");

    const onChange = e => {
        setItem({
            item: {
                name: e.target.value
            }
        });
    };

    const handleSubmit = () => {
        axios
            .post("api/item/store", { item: item.item.name })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    return (
        <div className="addItem mt-5">
            <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        onChange={onChange}
                        value={item.name}
                    />
                    <div className="input-group-append">
                        <input
                            className={item ? "btn btn-primary" : "d-none"}
                            type="submit"
                            value="Add Item"
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};
