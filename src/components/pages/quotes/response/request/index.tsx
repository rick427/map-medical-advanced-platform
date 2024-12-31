import { Stack, Box, Title, Text, TextInput, Group, Button, SimpleGrid, Divider, Textarea } from "@mantine/core";

import styles from "./request.module.scss";
import ResponseDatatable from "@/components/pages/quotes/datatable/response";

import { colors } from "@/constants/colors";

interface QuoteRequestProps {
    onCancel: () => void;
    onContinue: () => void;
}

export default function QuoteRequest({onCancel, onContinue}:QuoteRequestProps) {
    return (
        <Box py="lg" px="xl" className={styles.box}>
            <Stack gap="lg">
                <Stack gap={5}>
                    <Title order={4} fw={700} c={colors.dark}>
                        Request for Quote
                    </Title>
                    <Text size="sm" c="gray.6">
                        Fill out these details to send the RFQ
                    </Text>
                </Stack>

                <Stack gap="lg">
                    <SimpleGrid cols={2}>
                        <TextInput label="RFQ No" value="RFQ-10234" disabled />
                        <TextInput label="Title" value="Request for Equipments" disabled />
                        <TextInput label="Department" value="Maternity" description="At least one department is required" disabled />
                        <TextInput label="Expected Delivery Date" value="2024-12-02" description="Calculated based on lead time and issue date" disabled />
                    </SimpleGrid>
                </Stack>

                <Divider my="md" />

                <Stack gap="sm">
                    <Title order={5} fw={700}>
                        Add Items
                    </Title>
                    <ResponseDatatable />
                </Stack>

                <Divider my="md" />

                <Stack align="flex-end">
                    <Group w={200} justify="space-between">
                        <Text size="sm" fw={300} c="gray.7">Subtotal</Text>
                        <Text size="sm" fw={600}>$8,000.00</Text>
                    </Group>
                </Stack>

                <Stack gap={5} w={500}>
                    <Textarea 
                        label="Note"
                        rows={6}
                        placeholder="Enter note here"
                    />
                    <Text ta="right" size="xs" c="gray.6" span>
                        0/200
                    </Text>
                </Stack>

                <Divider my="md" />
                <Group justify="flex-end">
                    <Button
                        fz={13}
                        fw={600}
                        variant="outline"
                        color="gray.7"
                        onClick={onCancel}
                    >
                        Cancel
                    </Button>
                    <Button
                        fz={13}
                        fw={600}
                        w={150}
                        color="myColor"
                        variant="outline"
                        onClick={onCancel}
                    >
                        Save as draft
                    </Button>
                    <Button
                        fz={13}
                        fw={600}
                        w={150}
                        color="myColor"
                        onClick={onContinue}
                    >
                        Continue
                    </Button>
                </Group>
            </Stack>
        </Box>
    )
}
