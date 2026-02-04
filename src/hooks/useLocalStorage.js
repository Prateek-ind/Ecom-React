import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { cartActions } from "../features/cart/CartSlice"

export const useLocalStorage=()=>{
    const [loaded, setLoaded] = useState(false)
    const dispatch = useDispatch()
    const cart = useSelector(state=>state.cart)
    const uid = useSelector(state=>state.auth.uid)


    useEffect(()=>{
        if(!uid) return
        const newCart = window.localStorage.getItem(`cart_${uid}`)
        if(newCart){
            dispatch(cartActions.replaceCart(JSON.parse(newCart)))
        }
        setLoaded(true)
    }, [dispatch, uid])

    useEffect(()=>{
        if(!loaded || !uid) return
        window.localStorage.setItem(`cart_${uid}`, JSON.stringify(cart))
       
    }, [cart, uid])

   

    
}