import { useEffect, useState } from 'react'
import { ICEBRK, BUSD } from '../constants'
import { useTradeExactIn } from './Trades'
import { useToken } from './Tokens'
import { tryParseAmount } from '../state/swap/hooks'

type ApiResponse = {
  updated_at: string
  data: {
    [key: string]: {
      name: string
      symbol: string
      price: string
      price_BNB: string
    }
  }
}

const api = 'https://api.pancakeswap.info/api/v2/tokens/'

const useGetPriceData = () => {
  const iceBrk = useToken(ICEBRK.address)
  const busd = useToken(BUSD.address)
  const parsedAmt = tryParseAmount("1000000000", iceBrk ?? undefined)
  /* console.log(parsedAmt) */
  const trade = useTradeExactIn(parsedAmt, busd ?? undefined)
  /* console.log(trade) */
  const priceIce = trade ? trade.outputAmount.numerator[1] / trade.outputAmount.denominator[1] : 0
  /* console.log(priceIce) */

  const [data, setData] = useState<ApiResponse | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api)
        const res: ApiResponse = await response.json()

        setData(res)
      } catch (error) {
        console.error('Unable to fetch price data:', error)
      }
    }

    fetchData()
  }, [setData])

  return { priceIce, data }
}

export default useGetPriceData