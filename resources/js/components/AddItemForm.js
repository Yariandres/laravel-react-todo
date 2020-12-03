import React, { useState } from "react";

export const AddItemForm = () => {
    const [item, setItem] = useState("");

    const onChange = e => {
        setItem({
            item: {
                name: e.target.value,
            }
        });
    };

    const onClick = () => {
        axios
            .post("api/item/store", {item: item.item.name})
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    return (
        <div className="addItem mt-5">
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    onChange={onChange}
                    value={item.name}
                />
                <div className="input-group-append">
                    <button
                        className={item ? "btn btn-primary" : "d-none"}
                        type="button"
                        onClick={onClick}
                    >
                        Add Item
                    </button>
                </div>
            </div>
        </div>
    );
};
