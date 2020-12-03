/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, Fragment } from "react";
import { useFetch } from "./hooks/useFetch";
import { ListItem } from "./ListItem";

export const ListView = () => {
    const { data, loading } = useFetch("api/items");

    return (
        <Fragment>
            {loading ? (
                <h1 className="display-3 text-center">Loading</h1>
            ) : (
                data.map(items => <ListItem items={items.name} key={items.id}/>)
            )}
        </Fragment>
    );
};
