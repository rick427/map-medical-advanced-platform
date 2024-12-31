import { useState } from "react";
import toast from "react-hot-toast";
import { useDisclosure } from "@mantine/hooks";
import { PiCaretDownBold } from "react-icons/pi";
import { Stack, Box, Title, Text, Avatar, Modal, Grid, Group, Button, SimpleGrid } from "@mantine/core";

import styles from "./review.module.scss";
import DetailDatatable from "@/components/pages/quotes/datatable/details";

import { icons } from "@/constants/icons";
import { colors } from "@/constants/colors";

interface QuoteReviewProps {
    onCancel: () => void;
    onContinue: () => void;
}

export default function QuoteReview({onCancel}:QuoteReviewProps) {
    const [loading, setLoading] = useState<boolean>(false);
    const [opened, {toggle}] = useDisclosure();

    const handleSubmit = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            toggle();
            onCancel();
            toast.success("RFQ ID sent successfully!", {
                style: {
                    fontSize: 13
                }
            });
            window.scrollTo({ top: 0, behavior: "instant" });
        }, 3000);
    }

    return (
        <Stack gap="lg">
            <Box py="lg" px="xl" className={styles.box}>
                <Stack gap="xl">
                    <Group justify="space-between">
                        <Title order={4} fw={700} c={colors.dark}>
                            Request Information
                        </Title>
                        <img src={icons.edit} alt="" width={24} height={24} /> 
                    </Group>

                    <Grid justify="space-between" align="flex-start">
                        <Grid.Col span={{base: 12, md: 8}}>
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
                                    <Text size="sm" fw={500} c="gray.6">Department</Text>
                                    <Text size="sm" fw={500}>Maternity</Text>
                                </SimpleGrid>
                                <SimpleGrid cols={2}>
                                    <Text size="sm" fw={500} c="gray.6">Expected Delivery Date</Text>
                                    <Text size="sm" fw={500}>2024-12-02</Text>
                                </SimpleGrid>
                            </Stack>
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
                    onClick={toggle}
                >
                    Submit
                </Button>
            </Group>

            <Modal centered withCloseButton={false} opened={opened} onClose={toggle}>
                <Stack>
                    <Text size="md" fw={700}>Confirmation</Text>
                    <Text fz={12.5} fw={400} c="gray.7">
                        You are about to submit this quote in response to RFQ ID,
                        this will immediately be sent to the client "Westend Clear Hospital".
                        Are you sure you want to proceed?
                    </Text>

                    <Group justify="flex-end">
                        <Button
                            fz={13}
                            fw={600}
                            w={100}
                            color="red"
                            variant="outline"
                            onClick={toggle}
                            disabled={loading}
                        >
                            Cancel
                        </Button>
                        <Button
                            fz={13}
                            fw={600}
                            w={100}
                            color="myColor"
                            loading={loading}
                            onClick={handleSubmit}
                        >
                            Continue
                        </Button>
                    </Group>
                </Stack>
            </Modal>
        </Stack>
    )
}
