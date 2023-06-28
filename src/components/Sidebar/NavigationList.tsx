import duotone from "components/icons/duotone";

export const navigations = [
  { type: "label", label: "Admin" },
  { name: "Dashboard", icon: duotone.Dashboard, path: "/dashboard" },
  {
    name: "Billing",
    icon: duotone.Order,
    path: "/billings",
    // children: [{ name: "Billing List", path: "/billings" }],
  },
  {
    name: "Customers",
    icon: duotone.Customers,
    path: "/customers",
    children: [
      { name: "Customer List", path: "/customers" },
      {
        name: "Create customer",
        path: "/customers/create-customer",
      },
    ],
  },
  // {
  //   name: "Refunds",
  //   icon: duotone.Refund,
  //   children: [
  //     { name: "Refund Request", path: "/admin/refund-request" },
  //     { name: "Refund Settings", path: "/admin/refund-setting" },
  //   ],
  // },
  // {
  //   name: "Sellers",
  //   icon: duotone.Seller,
  //   children: [
  //     { name: "Seller List", path: "/admin/sellers" },
  //     { name: "Seller Package", path: "/admin/seller-package" },
  //     { name: "Package Payments", path: "/admin/package-payment" },
  //     { name: "Earning History", path: "/admin/earning-history" },
  //     { name: "Payouts", path: "/admin/payouts" },
  //     { name: "Payout Request", path: "/admin/payout-request" },
  //   ],
  // },
  { type: "label", label: "Vendor" },
  {
    name: "Refund Request",
    icon: duotone.Refund,
    path: "/vendor/refund-request",
  },
  { name: "Reviews", icon: duotone.Review, path: "/vendor/reviews" },
  {
    name: "Setting",
    icon: duotone.SiteSetting,
    path: "/vendor/shop-settings",
  },
  {
    name: "Support Tickets",
    icon: duotone.ElementHub,
    path: "/vendor/support-tickets",
  },
  {
    name: "Account Setting",
    icon: duotone.AccountSetting,
    path: "/vendor/account-setting",
  },
  { name: "Logout", icon: duotone.Session, path: "/" },
];
