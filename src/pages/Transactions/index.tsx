import { useContext } from 'react'

import { Header, Summary } from '../../components'
import { TransactionsContext } from '../../contexts'
import { SearchForm } from './components'
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

export function Transactions() {
  const { transactions } = useContext(TransactionsContext)

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              const { category, createdAt, description, id, price, type } =
                transaction

              return (
                <tr key={id}>
                  <td width="40%">{description}</td>
                  <td>
                    <PriceHighlight variant={type}>{price}</PriceHighlight>
                  </td>
                  <td>{category}</td>
                  <td>{createdAt}</td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
