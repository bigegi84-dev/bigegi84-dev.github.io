const gardenState = {
  empty: {
    account: [],
    asset: [],
    claim: [],
    customer: [],
    config: {
      payday: 28,
    },
    debt: [],
    form: {
      account: [, , , , false],
      customer: [false, false, ""],
      purchase: {
        mode: null,
        i: null,
        supplyAndSourceId: "",
        name: "",
        amount: 0,
        price: 0,
        productName: [],
      },
      sale: {
        mode: null,
        i: null,
        supplyAndSaleId: "",
        name: "",
        amount: 0,
        price: 0,
        unitPrice: 0,
        productName: [],
      },
      stuff: [false, false, "", "", 0.0, 0.0, ""],
      supply: {
        mode: null,
        i: null,
        name: "",
        source: "",
        link: "",
        price: 0.0,
        amount: 0.0,
        unit: "",
      },
      supplySale: {
        mode: null,
        iSupply: null,
        i: null,
        price: "",
        scaleId: "",
      },
      supplyScale: {
        mode: null,
        iSupply: null,
        i: null,
        name: "",
        ratio: "",
      },
    },
    info: { name: "" },
    purchase: [],
    sale: [],
    show: { balance: false },
    stuff: [],
    supply: [],
  },
  example: {
    account: [["Contoh", "bigegi84", 0.0]],
    asset: [["Contoh", "bigegi84", 0.0, 0.0]],
    claim: [["Contoh", "bigegi84", 0.0, 0.0]],
    config: {
      payday: 28,
    },
    debt: [["Contoh Utang", "bigegi84", 100.0, 7, 2]],
    form: {
      account: [, , , , false],
      stuff: [false, false, "", "", 0.0, 0.0, ""],
    },
    info: { name: "" },
    show: { balance: false },
    stuff: [["Contoh Barang", ["2023-06-21T16:55:41+07:00", 10000]]],
  },
  stuff: {
    unit: [],
  },
};
