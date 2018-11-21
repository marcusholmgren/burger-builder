import React, {Component} from 'react';
import Burger from '../../compontents/Burger/Burger.js';
import BuildControls from '../../compontents/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.6
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4
    }

    addIngredientHandler = (type) => {
        const updatedCount = this.state.ingredients[type] + 1;
        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];

        this.setState({
            ...this.state,
            ingredients: {
                ...this.state.ingredients,
                [type]: updatedCount,
            },
            totalPrice: newPrice
        });
    }

    removeIngredientHandler = (type) => {
        const updatedCount = this.state.ingredients[type] - 1;
        const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];

        this.setState({
            ...this.state,
            ingredients: {
                ...this.state.ingredients,
                [type]: updatedCount < 0 ? 0 : updatedCount,
            },
            totalPrice: newPrice < 4 ? 4 : newPrice
        });
    }

    render() {
        const disableInfo = {
            ...this.state.ingredients
        };
        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0;
        }
        return (
            <>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disableInfo}
                />
            </>
        );
    }
}

export default BurgerBuilder;
