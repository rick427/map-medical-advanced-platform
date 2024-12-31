import { useState } from 'react';
import { Group, Image, Text, Stack } from '@mantine/core';
import { DataTable, type DataTableColumn } from 'mantine-datatable';

import img from "@/assets/item.jpg";
import styles from "./details.module.scss";

interface RecordsProps {
    id: number;
    name: string;
    ref: string;
    variant: string;
    quantity: string;
    price: number;
    amount: number;
    dueDate: string;
}

const records:RecordsProps[] = [
    {
        id: 1,
        name: "Oxygen Concentration",
        ref: "#28373",
        variant: "Blue",
        quantity: "100 Pieces",
        price: 200,
        amount: 200,
        dueDate: "2024-08-07",
    },
    {
        id: 2,
        name: "Mechanical Ventilator",
        ref: "#28373",
        variant: "NIL",
        quantity: "45 Kg",
        price: 350,
        amount: 2500,
        dueDate: "2024-08-07"
    },
    {
        id: 3,
        name: "Patient Monitor",
        ref: "#28373",
        variant: "Blue",
        quantity: "30 Units",
        price: 300,
        amount: 1500,
        dueDate: "2024-08-07"
    },
    {
        id: 4,
        name: "Mechanical Ventilator",
        ref: "#28373",
        variant: "Blue",
        quantity: "30 Units",
        price: 300,
        amount: 300,
        dueDate: "2024-08-07"
    },
];

export default function DetailDatatable() {
    const [selectedRecords, setSelectedRecords] = useState<RecordsProps[]>([]);

    const columns:DataTableColumn<RecordsProps>[] = [
        {
            width: 250,
            accessor: "id",
            title: "Items",
            cellsClassName: styles.tableCells,
            titleClassName: styles.tableColumnCells,
            render: ({name, ref}) => (
                <Group gap="xs">
                    <Image src={img} w={35} h={35} radius="md" fit="cover" />
                    <Stack gap={5}>
                        <Text size="xs" fw={600}>{name}</Text>
                        <Text size="xs" c="gray.6">{ref}</Text>
                    </Stack>
                </Group>
            )
        },
        {
            width: 150,
            accessor: "variant",
            title: "Variant",
            cellsClassName: styles.tableCells,
            titleClassName: styles.tableColumnCells,
        },
        {
            width: 150,
            accessor: "quantity",
            title: "Quantity",
            cellsClassName: styles.tableCells,
            titleClassName: styles.tableColumnCells,
        },
        {
            width: 120,
            accessor: "price",
            title: "Price",
            cellsClassName: styles.tableCells,
            titleClassName: styles.tableColumnCells,
            render: ({price}) => `$${price.toLocaleString("en", {minimumFractionDigits: 2})}`
        },
        {
            width: 120,
            accessor: "amount",
            title: "Amount",
            cellsClassName: styles.tableCells,
            titleClassName: styles.tableColumnCells,
            render: ({amount}) => `$${amount.toLocaleString("en", {minimumFractionDigits: 2})}`
        },
        {
            width: 200,
            accessor: "dueDate",
            title: "Expected Delivery Date",
            cellsClassName: styles.tableCells,
            titleClassName: styles.tableColumnCells,
        },
    ];

    return (
        <DataTable
            striped={true}
            columns={columns}
            withTableBorder
            borderColor="#E4E7EC"
            withRowBorders={true}
            records={records}
            stripedColor="#E4E7EC"
            minHeight={280}
            borderRadius="md"
            selectedRecords={selectedRecords}
            onSelectedRecordsChange={setSelectedRecords}
        />
    )
}
