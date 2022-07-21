import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead className={styles.title}>
        <tr>
          <th className={styles.tableBox}>Type</th>
          <th className={styles.tableBox}>Amount</th>
          <th className={styles.tableBox}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ type, amount, currency, id }) => (
          <tr className={styles.tableRow} key={id}>
            <td className={styles.tableBox}>{type}</td>
            <td className={styles.tableBox}>{amount}</td>
            <td className={styles.tableBox}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
TransactionHistory.prototype = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
