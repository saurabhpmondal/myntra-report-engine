import { readCsv } from "./utils/csvReader.js";
import { parseSatraniOrders } from "./parsers/satraniOrdersParser.js";
import {
  uploadOrders,
  writeImportLog,
  writeSystemLog
} from "./sheets/uploadToSheet.js";

async function main() {
  try {
    const filePath =
      "./downloads/Seller_Orders_Report-L-1406.csv";

    console.log("Reading CSV...");

    const rawRows = await readCsv(filePath);

    console.log(
      `Rows found: ${rawRows.length}`
    );

    const parsedRows =
      parseSatraniOrders(rawRows);

    console.log(
      `Parsed rows: ${parsedRows.length}`
    );

    await uploadOrders(parsedRows);

    await writeImportLog({
      accountCode: "SATRANI",
      accountName: "Satrani",
      reportName: "Seller_Orders_Report",
      rowCount: parsedRows.length,
      status: "SUCCESS",
      timestamp: new Date().toISOString()
    });

    console.log("Import completed");
  } catch (error) {
    console.error(error);

    await writeSystemLog({
      module: "CSV_IMPORT",
      status: "FAILED",
      message: error.message,
      timestamp: new Date().toISOString()
    });
  }
}

main();