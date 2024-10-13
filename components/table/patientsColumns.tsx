"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Patient } from "@/types/appwrite.types";

export const patientsColumns: ColumnDef<Patient>[] = [
  {
    header: "#",
    cell: ({ row }) => {
      return <p className="text-14-medium ">{row.index + 1}</p>;
    },
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      const patient = row.original;
      return <p className="text-14-medium ">{patient.name}</p>;
    },
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => {
      const patient = row.original;
      return <p className="text-14-medium ">{patient.email}</p>;
    },
  },
  {
    accessorKey: "phone",
    header: "Phone",
    cell: ({ row }) => {
      const patient = row.original;
      return <p className="text-14-medium ">{patient.phone}</p>;
    },
  },
];
