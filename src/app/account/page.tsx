import { delay } from "@/utils/helper";
import OrderList from "./OrderList";

async function AccountPage() {
  await delay(2000);

  return (
    <>
      <div className=" my-10 container mx-auto">
        <div>
          <h4 className="text-lg font-semibold text-primaryColor  capitalize mb-2">
            Order List
          </h4>
        </div>
        <div className="overflow-x-auto">
          <OrderList />
        </div>
      </div>
    </>
  );
}

export default AccountPage;
