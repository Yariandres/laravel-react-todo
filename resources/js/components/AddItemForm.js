import React, { useState } from "react";

export const AddItemForm = () => {
    const [data, setData] = useState({
        item: {
            name: ""
        }
    });

    return (
        <div className="addItem mt-5">
            <div className="input-group mb-3">
                <input type="text" className="form-control" />
                <div className="input-group-append">
                    <button
                        className={
                            data.item.name
                                ? "active"
                                : "inactive"
                        }
                        type="button"
                    >
                        Add Item
                    </button>
                </div>
            </div>
        </div>
    );
};
