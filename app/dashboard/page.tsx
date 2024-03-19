import Link from "next/link";

export default function Dashboard() {
    return <p>DashBoard<br></br>

        <Link href="./customers">Customers</Link><br></br>
        <Link href="dashboard/invoices">INvoices</Link>

    </p>
}