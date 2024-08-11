import { createContext, FC, PropsWithChildren, useContext, useMemo, useState } from "react";
import { TStatus } from "../constants/records";
export type order = {
  id?: string;
  vendorID?: string;
  quantity: number;
  isDelivery: boolean;
  deliveryFee: number;
  deliveryAddress: string;
  pickAddress: string;
  totalCost: number;
  createdAt: string,
  pricePerCrate: number,
  status?: TStatus
}
type contextProps = {
  order?: order,
  setOrder: React.Dispatch<React.SetStateAction<order>>,
  orders: order[],
  availableCrates?: number,
  setAvailableCrates: React.Dispatch<React.SetStateAction<number>>
}

const AppContext = createContext<contextProps>({
  orders: [],
  setOrder: () => { },
  setAvailableCrates: () => { }
})

const useApp = () => {
  const [order, setOrder] = useState({
    quantity: 0,
    isDelivery: false,
    deliveryFee: 0,
    deliveryAddress: '',
    pickAddress: '',
    totalCost: 0,
    createdAt: '',
    pricePerCrate: 0,
  })
  const [availableCrates, setAvailableCrates] = useState(28)
  const [orders, setOrders] = useState<order[]>([])

  // Watches order for change and adds to orders array
  useMemo(() => {
    if (order.quantity >= 1)
      setOrders(prev => [{ ...order, status: 'pending' }, ...prev])
  }, [order])

  return {
    order, setOrder,
    orders,
    availableCrates, setAvailableCrates
  }
}

const ContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const appContext = useApp()

  return <AppContext.Provider value={appContext}>
    {children}
  </AppContext.Provider>
}

export default ContextProvider

export const useAppContext = () => {
  const ctx = useContext(AppContext)
  // if (ctx === null) throw new Error('App context is null')

  return ctx
}