/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, Fragment, createRef } from "react";
import { useFetch } from "./hooks/useFetch";
// import { ListItem } from "./ListItem";

export const ListView = () => {
    const [state, setState] = useState("");

    const { data, loading, handleChange } = useFetch("api/items");

    const checkState = createRef();

    const editState = event => {
        setState(event.target.checked);
        handleChange(state)
    };

    return (
        <Fragment>
            {loading ? (
                <h1 className="display-3 text-center">Loading</h1>
            ) : (
                data.map(items => (
                    <div className="item mb-3" key={items.id}>
                        <input
                            type="checkbox"
                            ref={checkState}
                            className="mr-2"
                            onChange={editState}
                            defaultChecked={false}
                        />
                        <span className={items.completed ? "completed" : ""}>
                            {items.name}
                        </span>

                        <button className="btn btn-danger btn-sm ml-3">
                            Remove
                        </button>
                    </div>
                ))
            )}
        </Fragment>
    );
};
