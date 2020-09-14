import React, { Component } from 'react'
import Auxillary from '../../components/Hoc/Auxillary'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuilldControls/BuildControls';

const INGREDIENT_PRICES = {
    salad   : 0.5,
    cheese  : 0.4,
    meat    : 1.2,
    bacon   : 1.7
}
class BurgerBuilder extends Component {
    constructor(props){
        super(props);
        this.state = {
            ingredients : {
                salad   : 0,
                bacon   : 0,
                cheese  : 0,
                meat    : 0
            },
            totalPrice : 0,
            purchaseable : false
        }
    }

    updatePurchaseState(ingredients){
        const sum = Object.keys(ingredients)
                    .map(igKey => {
                        return ingredients[igKey];
                    })
                    .reduce((sum, item) => {
                        return sum + item
                    }, 0);
        console.log(sum);
        console.log(sum > 0);
        this.setState({
            purchaseable: sum > 0
        });
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;

        const updatedIngredients = {
            ...this.state.ingredients
        }

        updatedIngredients[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({ totalPrice : newPrice, ingredients : updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];

        if(this.isIngredientsIsZero(oldCount)) {
            return;
        }
        const updatedCount = oldCount - 1;

        const updatedIngredients = {
            ...this.state.ingredients
        }

        updatedIngredients[type] = updatedCount;

        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;

        this.setState({ totalPrice : newPrice, ingredients : updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    isIngredientsIsZero = (total) =>{
        if(total < 1){
            return true
        }

        return false
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }

        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] < 1;
        }

        return (
            <Auxillary>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    purchaseable={this.state.purchaseable}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    ingredientRemove={this.removeIngredientHandler}
                    ingredientAdded={this.addIngredientHandler}/>
            </Auxillary>
        )
    }
}

export default BurgerBuilder;
