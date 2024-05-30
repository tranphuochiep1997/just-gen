const oracledb = require('oracledb');

// Connection string
// const dbConfig = {
//   user: 'your_username',
//   password: 'your_password',
//   connectString: 'your_connect_string' // Host:Port/ServiceName
// };
module.exports = async function getTableColumns(dbConfig, tableName) {
  let connection;

  try {
    // Connect to the Oracle database
    connection = await oracledb.getConnection(dbConfig);

    // Query to get the columns of the specified table
    const query = `
      SELECT COLUMN_NAME, DATA_TYPE
      FROM USER_TAB_COLUMNS
      WHERE TABLE_NAME = :tableName
    `;

    // Execute the query
    const result = await connection.execute(query, [tableName]);

    // Extract column names from the query result
    const columns = result.rows.map(row => ({
      name: row[0],
      dataType: row[1]
    }));
    return columns;
  } catch (error) {
    console.error('Error getting table columns:', error);
    throw error;
  } finally {
    // Release the connection
    if (connection) {
      try {
        await connection.close();
      } catch (error) {
        console.error('Error closing connection:', error);
        throw error;
      }
    }
  }
}
