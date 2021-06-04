import { MenuEntry } from '@pancakeswap-libs/uikit'
import { ICEBRK } from '../../constants'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://coinsbittytester.github.io/',
  },
  {
    label: 'Swap',
    icon: 'TradeIcon',
    href: '/swap?inputCurrency=BNB&outputCurrency=0xaabcac4b236d1a7290fb05234862348d274621cf',
  },
  {
    label: 'Liquidity',
    icon: 'TradeIcon',
    href: '/add/BNB/0xaabcac4b236d1a7290fb05234862348d274621cf',
  },
  {
    label: 'Prediction (BETA)',
    icon: 'PredictionsIcon',
    href: 'https://coinsbittytester.github.io/prediction',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: 'https://coinsbittytester.github.io/lottery',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'IceBreak-R Chart on DexTools',
        href: 'https://www.dextools.io/app/pancakeswap/pair-explorer/0xaabcac4b236d1a7290fb05234862348d274621cf',
      },
      {
        label: 'IceBreak-R on PancakeSwap',
        href: 'https://pancakeswap.info/token/'.concat(ICEBRK.address),
      },
    ],
  },
]

export default config
