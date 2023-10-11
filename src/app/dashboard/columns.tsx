/* eslint-disable react/no-unescaped-entities */
'use client'
import { Button } from '@/components/ui/button'
import { Users } from '@/types/users'
import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown, MoreHorizontal } from "lucide-react"

export const Columns: ColumnDef<Users>[] = [
  {
    accessorKey: "id_card_number",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Numero de carte d'ID
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "first_name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Prenom
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "last_name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nom
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "sexe",
    header: "Sexe",
  },
  {
    accessorKey: "address",
    header: "Adresse",
  },
  {
    accessorKey: "phone_number",
    header: "Numero de telephone",
  },
]
