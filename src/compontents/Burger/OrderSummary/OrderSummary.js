import React from 'react';
import Button from '../../UI/Button/Button';

function orderSummary(props) {
    const {ingredients, price} = props;
    const ingredientSummary = Object.keys(ingredients)
        .filter((igKey) => ingredients[igKey] > 0)
        .map((igKey) => (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
                </li>
            )
        );

    return (
        <>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {price}</strong></p>
            <p>Continue to Checkout?</p>
            <Button
                btnType="Danger"
                clicked={props.purchaseCanceled}
            >CANCEL</Button>
            <Button
                btnType="Success"
                clicked={props.purchaseContinued}
            >CONTINUE</Button>
        </>
    );
}

export default orderSummary;
