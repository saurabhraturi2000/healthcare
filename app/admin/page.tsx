import Link from "next/link";

// import { StatCard } from "@/components/StatCard";
import { DataTable } from "@/components/table/DataTable";
import { patientsColumns } from "@/components/table/patientsColumns";
// import { getRecentAppointmentList } from "@/lib/actions/appointment.actions";
import { getRecentPatientList } from "@/lib/actions/patient.actions";

const AdminPage = async () => {
  // const appointments = await getRecentAppointmentList();
  const patients = await getRecentPatientList();

  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
      <header className="admin-header">
        <Link href="/" className="cursor-pointer">
          <div className="text-4xl font-bold">HealthCare</div>
          {/* <Image
            src="/assets/icons/logo-full.svg"
            height={32}
            width={162}
            alt="logo"
            className="h-8 w-fit"
          /> */}
        </Link>

        <p className="text-16-semibold">Admin Dashboard</p>
      </header>

      <main className="admin-main">
        <section className="w-full space-y-4">
          <h1 className="header">Welcome 👋</h1>
          <p className="text-dark-700">
            Welcome to the admin dashboard. Here you can manage your patients
          </p>
        </section>

        {/* <section className="admin-stat">
          <StatCard
            type="appointments"
            count={appointments.scheduledCount}
            label="Scheduled appointments"
            icon={"/assets/icons/appointments.svg"}
          />
          <StatCard
            type="pending"
            count={appointments.pendingCount}
            label="Pending appointments"
            icon={"/assets/icons/pending.svg"}
          />
          <StatCard
            type="cancelled"
            count={appointments.cancelledCount}
            label="Cancelled appointments"
            icon={"/assets/icons/cancelled.svg"}
          />
        </section> */}

        <DataTable columns={patientsColumns} data={patients.documents} />
        {/* <DataTable columns={columns} data={appointments.documents} /> */}
      </main>
    </div>
  );
};

export default AdminPage;
