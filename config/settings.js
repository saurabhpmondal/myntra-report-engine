export const settings = {
  app: {
    name: "myntra-report-engine",
    version: "1.0.0",
    environment: "production"
  },

  marketplace: {
    name: "MYNTRA"
  },

  google: {
    appsScriptUrl:
      "https://script.google.com/macros/s/AKfycbw-wjbsaoNLYusdX0nkcjIyvOovky1i8PdQrzHxelfhGqgZL46iscwuq9JwJu--JsWE/exec",

    tabs: {
      config: "CONFIG",
      ordersRaw: "ORDERS_RAW",
      importLog: "IMPORT_LOG",
      systemLog: "SYSTEM_LOG"
    }
  },

  reports: {
    retentionDays: 7,

    supportedReports: [
      "Seller_Orders_Report"
    ]
  },

  downloads: {
    directory: "./downloads"
  },

  retries: {
    enabled: true,
    startHour: 3,
    endHour: 9
  },

  importStrategy: {
    mode: "REPLACE_ACCOUNT_DATA"
  }
};