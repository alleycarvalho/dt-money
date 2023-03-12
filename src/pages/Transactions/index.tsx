import { Header, Summary } from '../../components'
import { SearchForm } from './components'
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            <tr>
              <td width="40%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/01/2023</td>
            </tr>
            <tr>
              <td width="40%">Hamburguer</td>
              <td>
                <PriceHighlight variant="outcome">-R$ 6.000,00</PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>18/01/2023</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
