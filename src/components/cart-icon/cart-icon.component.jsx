import React from 'react'
import { connect } from 'react-redux'

import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'

import './cart-icon.styles.scss'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden} >
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
)

// ! This is called a selector, because we are writring code that gets a state object,
// ! and the pulls off just a small section (a slice of that state). We are getting
// ! the cart, and then the cartItem and then reducing the cartItems to get a new value
// ! The new value is generated off of the state
const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
})

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon)