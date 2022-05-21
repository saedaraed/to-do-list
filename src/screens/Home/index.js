import React, { useState } from "react";
import InputBox from "../../components/InputBox";
import List from "../../components/List";
import "./style.css";

export default function Index() {
    const [value, setValue] = useState("");
    const [listItems, setListItems] = useState([{
            title: "Yazn",
            id: Math.random() * 1000,
        },
        {
            title: "Yazn",
            id: Math.random() * 1000,
        },
        {
            title: "Moath",
            id: Math.random() * 1000,
        },
        {
            title: "Husam",
            id: Math.random() * 1000,
        },
    ]);

    // state = {
    //     value: "",
    //     items:
    // };

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleAdd = () => {
        setListItems([
            ...listItems,
            {
                title: value,
                id: Math.random() * 20000,
            },
        ]);

        setValue("");

        // this.setState({
        //     items: [
        //         {
        //             title: this.state.value,
        //             id: Math.random() * 20000,
        //         },
        //         ...this.state.items,
        //     ],
        //     value: ''
        // });
    };
    const handleDelete = (id) => {
        setListItems(listItems.filter((item) => item.id !== id));
        // this.setState({
        //     items: this.state.items.filter((item) => item.id !== id),
        // });
    };
    return ( <
        div className = { "inner-container" } >
        <
        h1 > To Do List App < /h1>{" "} <
        InputBox value = { value }
        handleChange = { handleChange }
        handleAdd = { handleAdd }
        />{" "} <
        List items = { listItems }
        handleDelete = { handleDelete }
        />{" "} <
        /div>
    );
}
