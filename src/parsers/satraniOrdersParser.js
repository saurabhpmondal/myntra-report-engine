export function parseSatraniOrders(rows) {
  const parsedRows = [];

  for (const row of rows) {
    parsedRows.push({
      marketplace: "MYNTRA",
      accountCode: "SATRANI",
      accountName: "Satrani",

      sellerOrderId: row["seller order id"] || "",
      styleId: row["style id"] || "",
      sellerSkuCode: row["seller sku code"] || "",
      skuId: row["sku id"] || "",

      brand: row["brand"] || "",
      styleName: row["style name"] || "",
      articleType: row["article type"] || "",

      orderStatus: row["order status"] || "",

      city: row["city"] || "",
      state: row["state"] || "",

      sellerPrice: row["seller price"] || "",
      discount: row["discount"] || "",
      couponDiscount: row["coupon discount"] || "",
      finalAmount: row["final amount"] || "",

      createdOn: row["created on"] || "",
      packedOn: row["packed on"] || "",
      shippedOn: row["shipped on"] || "",
      deliveredOn: row["delivered on"] || "",

      cancelledOn: row["cancelled on"] || "",

      returnCreationDate:
        row["return creation date"] || "",

      poType: row["po_type"] || ""
    });
  }

  return parsedRows;
}