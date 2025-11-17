import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { cartActions } from "../features/cart/CartSlice"

export const useLocalStorage=()=>{
    const [loaded, setLoaded] = useState(false)
    const dispatch = useDispatch()
    const cart = useSelector(state=>state.cart)
    const userId = useSelector(state=>state.user.userId)


    useEffect(()=>{
        if(!userId) return
        const newCart = window.localStorage.getItem(`cart_${userId}`)
        if(newCart){
            dispatch(cartActions.replaceCart(JSON.parse(newCart)))
        }
        setLoaded(true)
    }, [dispatch, userId])

    useEffect(()=>{
        if(!loaded || !userId) return
        window.localStorage.setItem(`cart_${userId}`, JSON.stringify(cart))
       
    }, [cart, userId])

   

    
}