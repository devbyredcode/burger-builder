import React from 'react';
import Auxillary from '../../Hoc/Auxillary';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return  <li key={igKey}>
                        <span>{igKey}</span> : {props.ingredients[igKey]}
                    </li>
        });

    return (
        <Auxillary>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
        </Auxillary>
    )
}

export default orderSummary