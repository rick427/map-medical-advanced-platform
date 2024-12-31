import { Stack, Box, Title, Text, Select, Group, Button, SimpleGrid, Divider } from "@mantine/core";

import styles from "./terms.module.scss";
import uploadImg from "@/assets/icons/upload.svg";

import { colors } from "@/constants/colors";

interface QuoteTermsProps {
    onCancel: () => void;
    onContinue: () => void;
}

export default function QuoteTerms({onContinue, onCancel}:QuoteTermsProps) {
    return (
        <Box py="lg" px="xl" className={styles.box}>
            <Stack gap="lg">
                <Stack gap={5}>
                    <Title order={4} fw={700} c={colors.dark}>
                        Terms and Attachments
                    </Title>
                    <Text size="sm" c="gray.6">
                        Provide detailed information on payment and delivery terms
                    </Text>
                </Stack>

                <Stack gap="lg">
                    <SimpleGrid cols={2}>
                        <Select label="Payment Terms" defaultValue="Net 30" data={["Net 30"]} />
                        <Select label="Delivery Schedule" defaultValue="Immediate delivery" data={["Immediate delivery"]} />
                        <Select label="Shipping Method" defaultValue="Courier Services" data={["Courier Services"]} />
                        <Select label="Lead Time" defaultValue="10" data={["10"]} />
                    </SimpleGrid>
                </Stack>

                <Divider my="md" />

                <Stack gap="sm">
                    <Stack gap={5}>
                        <Title order={5} fw={700}>
                            Attachments
                        </Title>
                        <Text size="sm" fw={300}>
                            Attach all necessary files or document
                        </Text>
                    </Stack>

                    <Box className={styles.upload}>
                        <Box className={styles.upload__box}>
                            <Stack gap="lg">
                                <div className={styles.upload__icon}>
                                    <img src={uploadImg} alt="upload" width={30} height={30} />
                                </div>
                                <Stack gap={5}>
                                    <Text size="xs" fw={300}>
                                        Click to upload or drag and drop
                                    </Text>
                                    <Text size="xs" fw={300} c="gray.6">
                                        SVG, PNG, JPG, or GIF (max. 800x400px)
                                    </Text>
                                </Stack>
                                <Divider ta="center" label="OR" />
                                <Button
                                    fz={13}
                                    fw={600}
                                    w={150}
                                    mx="auto"
                                    color="myColor"
                                    variant="outline"
                                >
                                    Browse Files
                                </Button>
                            </Stack>
                        </Box>
                    </Box>
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
