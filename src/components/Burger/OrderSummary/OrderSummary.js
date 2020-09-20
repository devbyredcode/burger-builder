import React, { Component } from 'react';
import Auxillary from '../../Hoc/Auxillary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component  {
    // componentWillUpdate(){
    //     console.log('[OrderSummary] Component Will Update');
    // }

    render(){
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return  <li key={igKey}>
                        <span>{igKey}</span> : {this.props.ingredients[igKey]}
                    </li>
        });

        return (
            <Auxillary>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p>Price: {this.props.price}</p>
                <Button 
                    clicked={this.props.purchaseCancled}
                    buttonType="Danger">Cancel</Button>
                <Button
                    clicked={this.props.purchaseContinued}
                    buttonType="Success">Order</Button>
            </Auxillary>
        )
    }
}

export default OrderSummary