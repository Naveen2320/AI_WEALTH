import { getAccountWithTransactions } from "@/actions/accounts";
import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import TransactionTable from "../_components/transaction-table";
import { BarLoader } from "react-spinners";
import AccountChart from "../_components/account-chart";

const AccountsPage = async ({ params }) => {
  if (!params?.id) {
    notFound();
  }

  const accountData = await getAccountWithTransactions(params.id);

  if (!accountData) {
    notFound();
  }
  const { transactions, ...account } = accountData;

  return (
    <div className="space-y-8 px-5">
      <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:items-end sm:justify-between min-w-0">
        <div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold break-words bg-gradient-to-r from-blue-600 to-purple-600 capitalize tracking-tight pr-2 text-transparent bg-clip-text">
            {account.name}
          </h1>
          <p className="text-muted-foreground">
            {account.type.charAt(0) + account.type.slice(1).toLowerCase()}{" "}
            Account
          </p>
        </div>

        <div className="text-right pb-2">
          <div className="text-xl sm:text-2xl font-bold">
            ${parseFloat(account.balance).toFixed(2)}
          </div>
          <p className="text-sm text-muted-foreground">
            {account._count.transactions}Transactions
          </p>
        </div>
      </div>

      {/**CHART SECTION OF PARTICULAR ACCOUNT */}
      <Suspense fallback={<BarLoader className="mt-4" width={"100%"} color="#9333ea" />}>
        <AccountChart transactions={transactions} />
      </Suspense>

      {/**Transaction table */}
      <Suspense
        fallback={<BarLoader className="mt-4" width={"100%"} color="#9333ea" />}
      >
        <TransactionTable transactions={transactions} />
      </Suspense>
    </div>
  );
};

export default AccountsPage;
