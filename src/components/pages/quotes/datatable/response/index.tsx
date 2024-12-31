import { HiOutlineCalendar } from "react-icons/hi";
import { Select, NumberInput, TextInput } from '@mantine/core';
import { DataTable, type DataTableColumn } from 'mantine-datatable';

import styles from "./response.module.scss";

import { icons } from '@/constants/icons';

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

export default function ResponseDatatable() {
    const columns:DataTableColumn<RecordsProps>[] = [
        {
            width: 200,
            accessor: "id",
            title: "Items",
            cellsClassName: styles.tableCells,
            titleClassName: styles.tableColumnCells,
            render: ({name}) => (
                <Select 
                    defaultValue={name} 
                    data={[name]}
                    disabled
                    w={200}  
                />
            )
        },
        {
            width: 120,
            accessor: "variant",
            title: "Variant",
            cellsClassName: styles.tableCells,
            titleClassName: styles.tableColumnCells,
            render: ({variant}) => (
                <Select 
                    defaultValue={variant} 
                    data={[variant]}
                    w={100}  
                />
            )
        },
        {
            width: 130,
            accessor: "quantity",
            title: "Quantity",
            cellsClassName: styles.tableCells,
            titleClassName: styles.tableColumnCells,
            render: ({quantity}) => (
                <NumberInput
                    decimalSeparator=","
                    allowNegative={false}
                    defaultValue={quantity.split(" ")[0]}
                    w={120}  
                />
            )
        },
        {
            width: 130,
            accessor: "price",
            title: "Price",
            cellsClassName: styles.tableCells,
            titleClassName: styles.tableColumnCells,
            render: ({price}) => (
                <NumberInput
                    prefix='$ '
                    decimalSeparator=","
                    allowNegative={false}
                    defaultValue={price}
                    w={120}  
                />
            )
        },
        {
            width: 180,
            accessor: "dueDate",
            title: "Expected Delivery Date",
            cellsClassName: styles.tableCells,
            titleClassName: styles.tableColumnCells,
            render: ({dueDate}) => (
                <TextInput
                    leftSection={<HiOutlineCalendar size={16}/>}
                    defaultValue={dueDate}
                    w={140}  
                />
            )
        },
        {
            width: 120,
            accessor: "amount",
            title: "Amount",
            cellsStyle: () => ({fontWeight: 600}),
            cellsClassName: styles.tableCells,
            titleClassName: styles.tableColumnCells,
            render: ({amount}) => `$${amount.toLocaleString("en", {minimumFractionDigits: 2})}`
        },
        {
            width: 50,
            accessor: "id",
            title: "",
            cellsClassName: styles.tableCells,
            titleClassName: styles.tableColumnCells,
            render: () => <img src={icons.bin} alt="bin" width={24} height={24} />
        },
    ];

    return (
        <DataTable
            columns={columns}
            withTableBorder={false}
            withRowBorders={true}
            records={records}
            stripedColor="#E4E7EC"
            minHeight={280}
        />
    )
}
