export const accounts = [
  {
    id: "myntra-satrani",
    accountCode: "SATRANI",
    accountName: "Satrani",

    active: true,

    marketplace: "MYNTRA",
    store: "MYNTRA",
    partnerType: "PPMP",

    reports: [
      "Seller_Orders_Report"
    ],

    credentials: {
      usernameSecret: "MYNTRA_SATRANI_USER",
      passwordSecret: "MYNTRA_SATRANI_PASS"
    },

    schedule: {
      generateHour: 2,
      retryStartHour: 3,
      retryEndHour: 9
    }
  },

  {
    id: "myntra-scpl",
    accountCode: "SCPL",
    accountName: "SCPL",

    active: false,

    marketplace: "MYNTRA",
    store: "MYNTRA",
    partnerType: "FBM",

    reports: [
      "Seller_Orders_Report"
    ],

    credentials: {
      usernameSecret: "MYNTRA_SCPL_USER",
      passwordSecret: "MYNTRA_SCPL_PASS"
    },

    schedule: {
      generateHour: 2,
      retryStartHour: 3,
      retryEndHour: 9
    }
  },

  {
    id: "myntra-leemboodi",
    accountCode: "LEEMBOODI",
    accountName: "Leemboodi",

    active: false,

    marketplace: "MYNTRA",
    store: "MYNTRA",
    partnerType: "PPMP",

    reports: [
      "Seller_Orders_Report"
    ],

    credentials: {
      usernameSecret: "MYNTRA_LEEMBOODI_USER",
      passwordSecret: "MYNTRA_LEEMBOODI_PASS"
    },

    schedule: {
      generateHour: 2,
      retryStartHour: 3,
      retryEndHour: 9
    }
  }
];