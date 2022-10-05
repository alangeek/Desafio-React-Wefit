import { createContext, ReactNode, useContext, useState } from 'react'

import { Product } from '../@types/cart'

import { api } from '../services/api'

interface CartProviderProps {
  children: ReactNode
}

interface UpdateProductAmount {
  productId: number
  amount: number
}

interface CartContextData {
  cart: Product[]
  addProduct: (productId: number) => Promise<void>
  removeProduct: (productId: number) => void
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextData>({} as CartContextData)

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [cart, setCart] = useState<Product[]>([])

  const addProduct = async (productId: number) => {
    try {
      const index = cart.findIndex(c => c.id === productId)
      const alreadyExists = index !== -1
      const newCart = [...cart]

      if (alreadyExists) {
        newCart.splice(index, 1, {
          ...cart[index],
          amount: cart[index].amount + 1,
        })
      } else {
        const { data } = await api.get<Product>(`/products/${productId}`)
        newCart.push({ ...data, amount: 1 })
      }

      setCart(newCart)
    } catch {
      alert('Não foi possível adicionar o produto')
    }
  }

  const removeProduct = async (productId: number) => {
    try {
      const index = cart.findIndex(c => c.id === productId)
      const newCart = [...cart]
      newCart.splice(index, 1)
      setCart(newCart)
    } catch {
      alert('Não foi possível remover')
    }
  }

  const updateProductAmount = ({ amount, productId }: UpdateProductAmount) => {
    const index = cart.findIndex(c => c.id === productId)
    const exists = index !== -1

    if (exists) {
      const newCart = [...cart]
      newCart[index].amount = amount
      setCart(newCart)
    } else {
      alert('Item não encontrado.')
    }
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct,
        removeProduct,
        updateProductAmount,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart(): CartContextData {
  const context = useContext(CartContext)

  return context
}
