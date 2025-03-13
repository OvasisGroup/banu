
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

const Dashboard = async () => {
    const session = await auth();
    if (!session) redirect("/signin");

  return (
    <div>Dashboard
    </div>
  )
};

export default Dashboard;