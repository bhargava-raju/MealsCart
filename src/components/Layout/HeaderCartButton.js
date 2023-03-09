import React, {Fragment} from "react"
import CartIcon from './../Cart/CartIcon'

const HeaderCartButton = props => {
    return(
        <Fragment>
            <button>
                <span><CartIcon></CartIcon></span>
                <span> Your Cart </span>
                <span> <bold>0</bold> </span>
            </button>
        </Fragment>
    )
}
export default HeaderCartButton