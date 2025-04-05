import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

export default function Services() {
  return (
    <main className="ml-62 my-8">
      <h1 className="font-semibold">How it works</h1>
      <div className="flex items-start text-sm gap-2">
        <div className="max-w-56 flex flex-col gap-3 rounded-lg border border-[#dce0e5] p-2">
          <FontAwesomeIcon icon={faHandshake} className="w-6 h-6" />
          <h2 className="font-semibold">Invest in a farm</h2>
          <p className="">Select a farm to invest in and sign a contract</p>
        </div>

        <div className="flex items-center  gap-4">
          <div className="max-w-56 flex flex-col gap-3 rounded-lg border border-[#dce0e5] p-2">
            <FontAwesomeIcon icon={faDollarSign} className="w-6 h-6 " />
            <h2 className="font-semibold">Earn returns</h2>
            <p className="">
              Receive annual interest payments and a share of the harvest
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="max-w-56 flex flex-col gap-3 rounded-lg border border-[#dce0e5] p-2">
            <FontAwesomeIcon icon={faTruck} className="w-6 h-6" />
            <h2 className="font-semibold">Harvest time</h2>
            <p className="">
              Track your crops progress and get updates on the growing season
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="max-w-56 flex flex-col gap-3 rounded-lg border border-[#dce0e5] p-2">
            <FontAwesomeIcon icon={faCalendar} className="w-6 h-6" />
            <h2 className="font-semibold">Enjoy the fruits of your labor</h2>
            <p className="">
              Redeem your investment or use it to buy fresh produce at wholesale
              prices
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
