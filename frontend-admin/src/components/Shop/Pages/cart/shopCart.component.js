import React, { Component } from "react";
// side cart import start
import {
    Div, Button, SideDrawer, Icon, Text
} from "atomize";
// side cart import end

export default class shopCart extends Component {
    constructor(props) {
        super(props);
        this.closeCart = this.closeCart.bind(this);
        this.openCart = this.openCart.bind(this);

        this.state = {isCartOpen: true, products: [], product: {}};
    }

    closeCart(){
        this.setState({ isCartOpen: false });
    };
    openCart () {
        this.setState({ isCartOpen: true });
    };

    render()
    {
        return (
        <div></div>

        )
    }

}
