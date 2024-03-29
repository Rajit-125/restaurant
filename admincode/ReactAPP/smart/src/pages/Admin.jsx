import { useEffect, useState } from "react";
import Supabase from "../Supabase/Client";

function Admin() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  async function fetchorderitem() {
    const { data: d, error: e } = await Supabase.from("orderdetail").select(
      "*",
    );
    setData(d);
    setError(e);
    console.log(d, e);
  }
  useEffect(() => {
    fetchorderitem();
  }, []);
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <>
      <div>
        <h1 className=" mx-96 flex items-center text-6xl text-black font-bold">
          Order Details
        </h1>
        <div className=" my-10">
      <table className="mx-40 text-2xl text-black font-semibold table-fixed gap-x-4 bg-green-400 rounded-lg">
        <thead>
          <tr>
            <th className="p-2">Item Name</th>
            <th className="p-2">Number of Items</th>
            <th className="p-2">Item Price (in rs)</th>
            <th className="p-2">Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item) => (
              <tr key={item.id} className="bg-white">
                <td className="p-2">{item.itemname}</td>
                <td className="p-2">{item.no_of_items}</td>
                <td className="p-2">{item.totalprice}</td>
                <td className="p-2">+{item.phone_number}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
        {
          /* {data &&
          data.map((item) => (
            <div className=" mx-72 my-10 flex items-center font-bold text-3xl text-black">
              <div id={item.id}>
                <h1>
                  {item.itemname}--{item.no_of_items}
                </h1>
                <h2>
                  {item.totalprice}
                </h2>
                <h3>
                  +{item.phone_number}
                </h3>
              </div>
            </div>
          ))} */
        }
      </div>
    </>
  );
}
export default Admin;
