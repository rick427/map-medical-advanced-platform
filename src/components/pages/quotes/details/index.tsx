import { IoClose } from "react-icons/io5";
import { PiBuildingsBold, PiCaretDownBold } from "react-icons/pi";
import { Box, Stack, Group, Title, Text, Button, Grid, SimpleGrid, Avatar, Badge } from "@mantine/core";

import styles from "./details.module.scss";
import DetailDatatable from "@/components/pages/quotes/datatable/details";

import { icons } from "@/constants/icons";
import { colors } from "@/constants/colors";

interface QuotesDetailProps {
    onNavigate: () => void;
}

export default function QuotesDetails({onNavigate}:QuotesDetailProps) {
    return (
        <Stack gap={25}>
            <Group justify="space-between">
                <Stack gap={5}>
                    <Title order={3} c={colors.dark}>Quote details</Title>
                    <Text size="xs" c="gray.6">
                        Created on Wed, 31th December 2024, 09:00am
                    </Text>
                </Stack>

                <Group>
                    <Button
                        fz={13}
                        fw={600}
                        color="myColor"
                        onClick={onNavigate}
                    >
                        Respond
                    </Button>
                    <Button
                        fz={13}
                        fw={600}
                        color="red.8"
                        leftSection={<IoClose size={18} />}
                    >
                        Reject
                    </Button>
                </Group>
            </Group>

            <Box py="lg" px="xl" className={styles.box}>
                <Stack gap="xl">
                    <Group justify="space-between">
                        <Title order={4} fw={700} c={colors.dark}>
                            Quote Information
                        </Title>
                        <Text size="xs" fw={300} c="gray.7">
                            Expected delivery date: 2024-12-02
                        </Text>
                    </Group>

                    <Grid justify="space-between" align="flex-start">
                        <Grid.Col span={{base: 12, md: 7}}>
                            <Stack gap="lg">
                                <SimpleGrid cols={2}>
                                    <Text size="sm" fw={500} c="gray.6">Title</Text>
                                    <Text size="sm" fw={500}>Request for Equipments</Text>
                                </SimpleGrid>
                                <SimpleGrid cols={2}>
                                    <Text size="sm" fw={500} c="gray.6">RFQ No</Text>
                                    <Text size="sm" fw={500}>RQ #01234</Text>
                                </SimpleGrid>
                                <SimpleGrid cols={2}>
                                    <Text size="sm" fw={500} c="gray.6">Requestor</Text>
                                    <Group gap="xs" align="center">
                                        <Avatar src="https://randomuser.me/api/portraits/women/85.jpg" variant="light" color="orange" size={30}>
                                            <Text size="xs" c="dark" fw={700} span>JD</Text>
                                        </Avatar>
                                        <Text size="sm" fw={500}>Jane Doe</Text>
                                        <div className={styles.dot} />
                                        <Text size="sm" fw={500} c="gray.6">
                                            Head Nurse, Paediatrics
                                        </Text>
                                    </Group>
                                </SimpleGrid>
                                <SimpleGrid cols={2}>
                                    <Text size="sm" fw={500} c="gray.6">Status</Text>
                                    <Badge  size="sm" variant="light" color="orange">Awaiting</Badge>
                                </SimpleGrid>
                                <SimpleGrid cols={2}>
                                    <Text size="sm" fw={500} c="gray.6">Department</Text>
                                    <Text size="sm" fw={500}>Maternity</Text>
                                </SimpleGrid>
                            </Stack>
                        </Grid.Col>
                        <Grid.Col span={{base: 12, md: 4}}>
                            <Box p="md" className={`${styles.box} ${styles.rounder}`}>
                                <Stack gap="xs">
                                    <Group gap="sm">
                                        <PiBuildingsBold size={20} color="gray" />
                                        <Text size="xs" fw={300}>Client</Text>
                                    </Group>
                                    <Group wrap="nowrap">
                                        <Avatar variant="light" color="orange" size={35}>
                                            <Text size="xs" c="dark" fw={700} span>W</Text>
                                        </Avatar>
                                        <Stack gap={2}>
                                            <Text size="sm" fw={500}>Westend Hospital</Text>
                                            <Text size="xs" c="gray.7" lineClamp={1}>
                                                No. 19, 1st Avenue, Opposite First Bank Gwarinpa
                                            </Text>
                                        </Stack>
                                    </Group>
                                </Stack>
                            </Box>
                        </Grid.Col>
                    </Grid>
                </Stack>
            </Box>

            <Box py="lg" px="xl" className={`${styles.box} ${styles.shadowed}`}>
                <Stack gap="lg">
                    <Title order={4} fw={700} c={colors.dark}>
                        Item(s)
                    </Title>

                    <DetailDatatable />

                    <Stack align="flex-end">
                        <Group w={200} justify="space-between">
                            <Text size="sm" fw={300} c="gray.7">Subtotal</Text>
                            <Text size="sm" fw={300}>$8,000.00</Text>
                        </Group>
                        <Group w={200} justify="space-between">
                            <Text size="sm" fw={300} c="gray.7">Total</Text>
                            <Text size="sm" fw={600}>$8,750.00</Text>
                        </Group>
                    </Stack>
                </Stack>
            </Box>

            <Box py="lg" px="xl" className={styles.box}>
                <Group justify="space-between">
                    <Group>
                        <img src={icons.doc} alt="doc" width={35} height={35} />
                        <Stack gap={5}>
                            <Title order={4} fw={700} c={colors.dark}>
                                Terms and Attachments
                            </Title>
                            <Text size="sm" c="gray.7">
                                Review payment and delivery terms
                            </Text>
                        </Stack>
                    </Group>

                    <PiCaretDownBold color="gray" size={20} />
                </Group>
            </Box>
        </Stack>
    )
}
