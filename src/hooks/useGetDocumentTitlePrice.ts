import { useEffect } from 'react'
import useGetPriceData from './useGetPriceData'

const useGetDocumentTitlePrice = () => {

  const { priceIce, data } = useGetPriceData()

  const cakePriceUsdString =
    Number.isNaN(priceIce) || priceIce === 0
      ? ''
      : ` - $${(priceIce).toLocaleString(undefined, {
          minimumFractionDigits: 3,
          maximumFractionDigits: 3,
        })}`

  useEffect(() => {
    document.title = `ICEBRK${cakePriceUsdString}`
  }, [cakePriceUsdString])
}
export default useGetDocumentTitlePrice
