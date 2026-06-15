export const reports = {
  Seller_Orders_Report: {
    reportName: "Seller_Orders_Report",

    importMode: "REPLACE",

    targetSheet: "ORDERS_RAW",

    requiredColumns: [
      "seller order id",
      "style id",
      "seller sku code",
      "sku id",
      "brand",
      "style name",
      "order status"
    ]
  }
};