"use client";
import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
} from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import LeadCard from "./leadCard";
import LeadTable from "./leadTable";
import AgentSkillPopup from "./agenSkill";

const navigation = [
  { name: "Home", href: "#", icon: "/home-icon.png", current: true },
  {
    name: "Recent",
    href: "#",
    icon: "/clock.png",
    current: false,
    hasDropdown: true,
    children: [
      { name: "Customer", href: "#", current: true },
      { name: "Declined", href: "#" },
    ],
  },
  {
    name: "Pinned",
    href: "#",
    icon: "/pin.png",
    current: false,
    hasDropdown: true,
    children: [
      { name: "Processed", href: "#" },
      { name: "Ongoing", href: "#" },
      { name: "Draft", href: "#" },
    ],
  },
  // { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
  // { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
  // { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
];
const works = [
  {
    id: 1,
    name: "Sales accelerator",
    href: "#",
    icon: "/rocket.png",
    current: false,
  },
  {
    id: 2,
    name: "Dashboards",
    href: "#",
    icon: "/dashboard.jpg",
    current: false,
  },
  {
    id: 3,
    name: "Activities",
    href: "#",
    icon: "/activities.png",
    current: false,
  },
];

const customers = [
  { id: 1, name: "Accounts", href: "#", icon: "/paper.jpg", current: false },
  { id: 2, name: "Contact", href: "#", icon: "/user.png", current: false },
];

const sales = [
  { id: 1, name: "Leads", href: "#", icon: "/leads.png", current: false },
  {
    id: 2,
    name: "Opportunities",
    href: "#",
    icon: "/opportunity.png",
    current: false,
  },
  {
    id: 3,
    name: "Competitors",
    href: "#",
    icon: "/users.jpg",
    current: false,
  },
];

const collateral = [
  { id: 1, name: "Quotes", href: "#", icon: "/qoutes.png", current: false },
  { id: 2, name: "Orders", href: "#", icon: "/orders.jpg", current: false },
  { id: 3, name: "Invoices", href: "#", icon: "invoices.jpg", current: false },
  { id: 4, name: "Products", href: "#", icon: "/product.png", current: false },
  {
    id: 5,
    name: "Sales Literature",
    href: "#",
    icon: "/literature.png",
    current: false,
  },
];

const markets = [
  {
    id: 1,
    name: "Marketing List",
    href: "#",
    icon: "/marketing.jpg",
    current: false,
  },
  {
    id: 2,
    name: "Quick Campaigns",
    href: "#",
    icon: "/quick.png",
    current: false,
  },
];

const performance = [
  { id: 1, name: "Sales", href: "#", icon: "S", current: false },
  { id: 2, name: "Pricing", href: "#", icon: "P", current: false },
  { id: 3, name: "Discounts", href: "#", icon: "D", current: false },
];

const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}


export default function Example() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleDropdown = (name: string | null): void => {
    setOpenDropdown(openDropdown === name ? null : name); // Toggle dropdown
  };

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div>
        <Dialog
          open={sidebarOpen}
          onClose={setSidebarOpen}
          className="relative z-50 lg:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-closed:opacity-0"
          />

          <div className="fixed inset-0 flex">
            {/* Small Screen */}
            <DialogPanel
              transition
              className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-closed:-translate-x-full"
            >
              <TransitionChild>
                <div className="absolute top-0 left-full flex w-16 justify-center pt-5 duration-300 ease-in-out data-closed:opacity-0">
                  <button
                    type="button"
                    onClick={() => setSidebarOpen(false)}
                    className="-m-2.5 p-2.5"
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  </button>
                </div>
              </TransitionChild>
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
                {/* <div className="flex h-16 shrink-0 items-center">
                </div> */}
                <nav className="flex flex-1 flex-col">
                  <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" className="-mx-2 space-y-1">
                        {navigation.map((item) => (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? "bg-gray-100 text-gray-800"
                                  : "text-gray-700 hover:bg-gray-50",
                                "flex items-center gap-3 p-2 rounded-md"
                              )}
                            >
                              <img
                                src={item.icon}
                                alt={`${item.name} Icon`}
                                className="h-6 w-6"
                              />
                              {item.name}
                              {item.hasDropdown && (
                                <button
                                  type="button"
                                  onClick={() => toggleDropdown(item.name)}
                                  className="ml-auto"
                                >
                                  {openDropdown === item.name ? (
                                    <ChevronUpIcon className="h-5 w-5" />
                                  ) : (
                                    <ChevronDownIcon className="h-5 w-5" />
                                  )}
                                </button>
                              )}
                            </a>
                            {item.hasDropdown && openDropdown === item.name && (
                              <ul className="ml-8 mt-2 space-y-1">
                                {item.children.map((subItem) => (
                                  <li key={subItem.name}>
                                    <a
                                      href={subItem.href}
                                      className="block p-2 text-gray-600 hover:bg-gray-50 rounded-md"
                                    >
                                      {subItem.name}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li>
                      <div className="text-sm/6 font-bold text-gray-800">
                        My Work
                      </div>
                      <ul role="list" className="-mx-2 mt-2 space-y-1">
                        {works.map((work) => (
                          <li key={work.name}>
                            <a
                              href={work.href}
                              className={classNames(
                                work.current
                                  ? "bg-gray-50 text-gray-800"
                                  : "text-gray-700 hover:border hover:bg-gray-50 hover:text-gray-800",
                                "group flex gap-x-3 rounded-md p-2 text-sm/6"
                              )}
                            >
                              <img
                                src={work.icon}
                                alt={work.name}
                                className={classNames(
                                  work.current
                                    ? "border-gray-600"
                                    : "border-gray-200 group-hover:border-gray-600",
                                  "flex size-6 shrink-0 items-center justify-center rounded-lg bg-white"
                                )}
                              />
                              <span className="truncate">{work.name}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>

                    {/* customers */}
                    <li>
                      <div className="text-sm/6 font-bold text-gray-800">
                        Customers
                      </div>
                      <ul role="list" className="-mx-2 mt-2 space-y-1">
                        {customers.map((customer) => (
                          <li key={customer.name}>
                            <a
                              href={customer.href}
                              className={classNames(
                                customer.current
                                  ? "bg-gray-50 text-gray-800"
                                  : "text-gray-700 hover:border hover:bg-gray-50 hover:text-gray-600",
                                "group flex gap-x-3 rounded-md p-2 text-sm/6"
                              )}
                            >
                              <img
                                src={customer.icon}
                                alt={customer.name}
                                className={classNames(
                                  customer.current
                                    ? "border-gray-600"
                                    : "border-gray-200 group-hover:border-gray-600",
                                  "flex size-6 shrink-0 items-center justify-center rounded-lg bg-white"
                                )}
                              />
                              <span className="truncate">{customer.name}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>

                    {/* Sales */}
                    <li>
                      <div className="text-sm/6 font-bold text-gray-800">
                        Sales
                      </div>
                      <ul role="list" className="-mx-2 mt-2 space-y-1">
                        {sales.map((sale) => (
                          <li key={sale.name}>
                            <a
                              href={sale.href}
                              className={classNames(
                                sale.current
                                  ? "bg-gray-50 text-gray-800"
                                  : "text-gray-700 hover:border hover:bg-gray-50 hover:text-gray-800",
                                "group flex gap-x-3 rounded-md p-2 text-sm/6"
                              )}
                            >
                              <img
                                src={sale.icon}
                                alt={sale.name}
                                className={classNames(
                                  sale.current
                                    ? "border-gray-600"
                                    : "border-gray-200 group-hover:border-gray-600",
                                  "flex size-6 shrink-0 items-center justify-center rounded-lg bg-white"
                                )}
                              />
                              <span className="truncate">{sale.name}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>

                    {/* Collateral */}
                    <li>
                      <div className="text-sm/6 font-bold text-gray-800">
                        Collateral
                      </div>
                      <ul role="list" className="-mx-2 mt-2 space-y-1">
                        {collateral.map((collaterals) => (
                          <li key={collaterals.name}>
                            <a
                              href={collaterals.href}
                              className={classNames(
                                collaterals.current
                                  ? "bg-gray-50 text-gray-800"
                                  : "text-gray-700 hover:border hover:bg-gray-50 hover:text-gray-800",
                                "group flex gap-x-3 rounded-md p-2 text-sm/6"
                              )}
                            >
                              <img
                                src={collaterals.icon}
                                alt={collaterals.name}
                                className={classNames(
                                  collaterals.current
                                    ? "border-gray-600"
                                    : "border-gray-200 group-hover:border-gray-600",
                                  "flex size-6 shrink-0 items-center justify-center rounded-lg bg-white"
                                )}
                              />
                              <span className="truncate">
                                {collaterals.name}
                              </span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>

                    {/* marketing */}
                    <li>
                      <div className="text-sm/6 font-bold text-gray-800">
                        Marketing
                      </div>
                      <ul role="list" className="-mx-2 mt-2 space-y-1">
                        {markets.map((marketing) => (
                          <li key={marketing.name}>
                            <a
                              href={marketing.href}
                              className={classNames(
                                marketing.current
                                  ? "bg-gray-50 text-gray-800"
                                  : "text-gray-700 hover:border hover:bg-gray-50 hover:text-gray-800",
                                "group flex gap-x-3 rounded-md p-2 text-sm/6"
                              )}
                            >
                              <img
                                src={marketing.icon}
                                alt={marketing.name}
                                className={classNames(
                                  marketing.current
                                    ? "border-gray-600"
                                    : "border-gray-200 group-hover:border-gray-600",
                                  "flex size-6 shrink-0 items-center justify-center rounded-lg bg-white"
                                )}
                              />
                              <span className="truncate">{marketing.name}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>

                    {/* Performance */}
                    <li>
                      <div className="text-sm/6 font-bold text-gray-800">
                        Performance
                      </div>
                      <ul role="list" className="-mx-2 mt-2 space-y-1">
                        {performance.map((perform) => (
                          <li key={perform.name}>
                            <a
                              href={perform.href}
                              className={classNames(
                                perform.current
                                  ? "bg-purple-50 text-gray-800"
                                  : "text-gray-700 hover:bg-gray-50 hover:border hover:text-gray-800",
                                "group flex gap-x-3 rounded-md p-2 text-sm/6"
                              )}
                            >
                              <span
                                className={classNames(
                                  perform.current
                                    ? "border-gray-600 text-gray-800"
                                    : "border-gray-200 text-gray-400 group-hover:border-gray-600 group-hover:text-gray-600",
                                  "flex size-6 shrink-0 items-center justify-center rounded-lg bg-white text-[0.625rem] font-medium"
                                )}
                              >
                                {perform.icon}
                              </span>
                              <span className="truncate">{perform.name}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </div>
        </Dialog>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-50 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-100 text-gray-800"
                              : "text-gray-700 hover:bg-gray-50 hover:border hover:text-gray-800",
                            "flex items-center gap-3 p-2 rounded-md"
                          )}
                        >
                          <img
                            src={item.icon}
                            alt={`${item.name} Icon`}
                            className="h-6 w-6"
                          />
                          {item.name}
                          {item.hasDropdown && (
                                <button
                                  type="button"
                                  onClick={() => toggleDropdown(item.name)}
                                  className="ml-auto"
                                >
                                  {openDropdown === item.name ? (
                                    <ChevronUpIcon className="h-5 w-5" />
                                  ) : (
                                    <ChevronDownIcon className="h-5 w-5" />
                                  )}
                                </button>
                              )}
                        </a>
                        {item.hasDropdown && openDropdown === item.name && (
                              <ul className="ml-8 mt-2 space-y-1">
                                {item.children.map((subItem) => (
                                  <li key={subItem.name}>
                                    <a
                                      href={subItem.href}
                                      className="block p-2 text-gray-600 hover:bg-gray-50 rounded-md"
                                    >
                                      {subItem.name}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            )}
                      </li>
                    ))}
                  </ul>
                </li>

                <li>
                  <div className="text-sm/6 font-bold text-gray-800">
                    My Works
                  </div>
                  <ul role="list" className="-mx-2 mt-2 space-y-1">
                    {works.map((work) => (
                      <li key={work.name}>
                        <a
                          href={work.href}
                          className={classNames(
                            work.current
                              ? "bg-gray-50 text-gray-400"
                              : "text-gray-700 hover:bg-gray-50 hover:border hover:text-gray-800",
                            "group flex gap-x-3 rounded-md p-2 text-sm/6"
                          )}
                        >
                          <img
                            src={work.icon}
                            alt={work.name}
                            className={classNames(
                              work.current
                                ? "border-gray-600"
                                : "border-gray-200 group-hover:border-gray-600",
                              "flex size-6 shrink-0 items-center justify-center rounded-lg bg-white"
                            )}
                          />
                          <span className="truncate">{work.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>

                {/* customers */}
                <li>
                  <div className="text-sm/6 font-bold text-gray-800">
                    Customers
                  </div>
                  <ul role="list" className="-mx-2 mt-2 space-y-1">
                    {customers.map((customer) => (
                      <li key={customer.name}>
                        <a
                          href={customer.href}
                          className={classNames(
                            customer.current
                              ? "bg-gray-50 text-gray-600"
                              : "text-gray-700 hover:bg-gray-50 hover:border hover:text-gray-800",
                            "group flex gap-x-3 rounded-md p-2 text-sm/6"
                          )}
                        >
                          <img
                            src={customer.icon}
                            alt={customer.name}
                            className={classNames(
                              customer.current
                                ? "border-gray-600"
                                : "border-gray-200 group-hover:border-gray-600",
                              "flex size-6 shrink-0 items-center justify-center rounded-lg bg-white"
                            )}
                          />
                          <span className="truncate">{customer.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>

                <li>
                  <div className="text-sm/6 font-bold text-gray-800">
                    Sales
                  </div>
                  <ul role="list" className="-mx-2 mt-2 space-y-1">
                    {sales.map((sale) => (
                      <li key={sale.name}>
                        <a
                          href={sale.href}
                          className={classNames(
                            sale.current
                              ? "bg-gray-50 text-gray-600"
                              : "text-gray-700 hover:bg-gray-50 hover:border hover:text-gray-800",
                            "group flex gap-x-3 rounded-md p-2 text-sm/6"
                          )}
                        >
                          <img
                            src={sale.icon}
                            alt={sale.name}
                            className={classNames(
                              sale.current
                                ? "border-gray-600"
                                : "border-gray-200 group-hover:border-gray-800",
                              "flex size-6 shrink-0 items-center justify-center rounded-lg bg-white"
                            )}
                          />
                          <span className="truncate">{sale.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>

                {/* collateral */}
                <li>
                  <div className="text-sm/6 font-bold text-gray-800">
                    Collateral
                  </div>
                  <ul role="list" className="-mx-2 mt-2 space-y-1">
                    {collateral.map((collaterals) => (
                      <li key={collaterals.name}>
                        <a
                          href={collaterals.href}
                          className={classNames(
                            collaterals.current
                              ? "bg-gray-50 text-gray-400"
                              : "text-gray-700 hover:bg-gray-50 hover:border hover:text-gray-800",
                            "group flex gap-x-3 rounded-md p-2 text-sm/6"
                          )}
                        >
                          <img
                            src={collaterals.icon}
                            alt={collaterals.name}
                            className={classNames(
                              collaterals.current
                                ? "border-gray-600"
                                : "border-gray-200 group-hover:border-gray-600",
                              "flex size-6 shrink-0 items-center justify-center rounded-lg bg-white"
                            )}
                          />
                          <span className="truncate">{collaterals.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                {/* marketing */}
                <li>
                  <div className="text-sm/6 font-bold text-gray-800">
                    Marketing
                  </div>
                  <ul role="list" className="-mx-2 mt-2 space-y-1">
                    {markets.map((marketing) => (
                      <li key={marketing.name}>
                        <a
                          href={marketing.href}
                          className={classNames(
                            marketing.current
                              ? "bg-gray-50 text-gray-400"
                              : "text-gray-700 hover:bg-gray-50 hover:border hover:text-gray-800",
                            "group flex gap-x-3 rounded-md p-2 text-sm/6"
                          )}
                        >
                          <img
                            src={marketing.icon}
                            alt={marketing.name}
                            className={classNames(
                              marketing.current
                                ? "border-gray-600"
                                : "border-gray-200 group-hover:border-gray-600",
                              "flex size-6 shrink-0 items-center justify-center rounded-lg bg-white"
                            )}
                          />
                          <span className="truncate">{marketing.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>

                {/* performance */}
                <li>
                  <div className="text-sm/6 font-bold text-gray-800">
                    Performance
                  </div>
                  <ul role="list" className="-mx-2 mt-2 space-y-1">
                    {performance.map((perform) => (
                      <li key={perform.name}>
                        <a
                          href={perform.href}
                          className={classNames(
                            perform.current
                              ? "bg-gray-50 text-gray-400"
                              : "text-gray-700 hover:bg-gray-50 hover:text-gray-600",
                            "group flex gap-x-3 rounded-md p-2 text-sm/6"
                          )}
                        >
                          <span
                            className={classNames(
                              perform.current
                                ? "border-gray-600 text-gray-600"
                                : "border-gray-200 text-gray-400 group-hover:border-gray-600 group-hover:text-gray-600",
                              "flex size-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium"
                            )}
                          >
                            {perform.icon}
                          </span>
                          <span className="truncate">{perform.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>

                {/* end of sidebar */}
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-60">
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-xs sm:gap-x-6 sm:px-6 lg:px-8">
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>

            {/* Separator */}
            <div
              aria-hidden="true"
              className="h-6 w-px bg-gray-200 lg:hidden"
            />

            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                <button
                  type="button"
                  className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon aria-hidden="true" className="size-6" />
                </button>

                {/* Separator */}
                <div
                  aria-hidden="true"
                  className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200"
                />

                {/* Profile dropdown */}
                <Menu as="div" className="relative">
                  <MenuButton className="-m-1.5 flex items-center p-1.5">
                    <span className="sr-only">Open user menu</span>
                
                    <img
                      alt=""
                      src="/auwal.jpeg"
                      className="size-8 rounded-full bg-gray-50"
                    />
                    <span className="hidden lg:flex lg:items-center">
                      <span
                        aria-hidden="true"
                        className="ml-4 text-sm/6 font-semibold text-gray-900"
                      >
                        Auwal Yahaya
                      </span>
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="ml-2 size-5 text-gray-400"
                      />
                    </span>
                  </MenuButton>
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 ring-1 shadow-lg ring-gray-900/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                  >
                    {userNavigation.map((item) => (
                      <MenuItem key={item.name}>
                        <a
                          href={item.href}
                          className="block px-3 py-1 text-sm/6 text-gray-900 data-focus:bg-gray-50 data-focus:outline-hidden"
                        >
                          {item.name}
                        </a>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
              </div>
            </div>
          </div>

          <main className="py-6">
            <div className="px-4 sm:px-6 lg:px-8">
              {/* Menu */}
      <button
        onClick={togglePopup}
        className="text-black border border-blue-300 px-4 py-2 mb-5 rounded hover:bg-gray-100"
      >
        Agent Skill
      </button>

       {/* Pop-up */}
       {isPopupOpen && (
        <AgentSkillPopup onClose={togglePopup} />
      )}
              <LeadCard />
            </div>
            <div className="px-4 mt-5 sm:px-6 lg:px-8">
              <LeadTable />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
