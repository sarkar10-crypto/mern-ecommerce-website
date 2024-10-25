import { ReactElement, useState } from "react";
import TableHOC from "../Components/admin/TableHOC";
import { Column } from "react-table";
import { Link } from "react-router-dom";

type Datatype = {
    _id: string;
    amount: number;
    quantity: number;
    discount: number;
    status: ReactElement;
    action: ReactElement;

};

const column: Column<Datatype>[] = [
    {
    Header: "ID",
    accessor:"_id",
    },
    {
    Header: "Quantity",
    accessor:"quantity",
    },
    {
    Header: "Discount",
    accessor:"discount",
    },
    {
    Header: "Amount",
    accessor:"amount",
    },
    {
    Header: "Status",
    accessor:"status",
    },
    {
    Header: "Action",
    accessor:"action",
    },
]

const Orders = () => {

    const [rows, setrows] = useState<Datatype[]>([ 

        {
    _id: "macbook",
    amount: 100000,
    quantity: 50,
    discount: 399,
    status: <span className="red">Processing</span>,
    action: <Link to={`/order/string`}>View</Link>,

        },
        {
    _id: "camera",
    amount: 10000,
    quantity: 100,
    discount: 999,
    status: <span className="red">Processing</span>,
    action: <Link to={`/order/string`}>View</Link>,

        },
        {
    _id: "GTA-V",
    amount: 1400,
    quantity: 50,
    discount: 199,
    status: <span className="red">Processing</span>,
    action: <Link to={`/order/string`}>View</Link>,

        },
        
 ])

    const Table = TableHOC<Datatype>(column,rows, "dashboard-product-box", "Orders", rows.length > 6)();
  return (
    <div className="container">
          <h1>MY ORDERS</h1>
          {Table}
    </div>
  )
}

export default Orders;
