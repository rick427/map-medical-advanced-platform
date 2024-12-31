import { useDisclosure, useViewportSize } from '@mantine/hooks';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import { PiCaretDownBold, PiCaretUpBold, PiCaretLeftBold, PiMagnifyingGlassBold} from "react-icons/pi";
import { AppShell, Text, Group, Stack, Burger, ScrollArea, Badge, Avatar, TextInput } from '@mantine/core';

import styles from "./layout.module.scss";
import brand from "@/assets/brand/brand.svg";

import { icons } from "@/constants/icons";
import { colors } from '@/constants/colors';
import { mainLinks, footerLinks } from '@/constants/navlinks';

const headerHeight = 64; //@: 64px;
const navbarWidth = 300; //@: 300px;

const { Header, Navbar, Section, Main } = AppShell;

export default function Layout() {
    const { width } = useViewportSize();
    const [opened, { toggle }] = useDisclosure();

    const navigate = useNavigate();
    const location = useLocation();

    //@: Derive header width dynamically, making sure it's never negative
    const headerWidth = width > navbarWidth ? width - navbarWidth : width;
    const pathname = location.pathname;

    return (
        <AppShell
            navbar={{
                breakpoint: 'sm',
                width: navbarWidth,
                collapsed: { mobile: !opened },
            }}
            padding="md"
        >
            <Navbar 
                px="lg"
                py="xl" 
                withBorder={false} 
                bg={colors.navbar_bg}
            >
                <img onClick={() => navigate("/")} src={brand} alt="brand" />

                <Section grow mt="lg" mb="md" component={ScrollArea}>
                    <Stack gap="xs">
                        {mainLinks.map(el => (
                            <Stack key={el.id} gap={el.children ? "sm" : 0}>
                                <Group
                                    p="sm" 
                                    justify="space-between" 
                                    className={styles.group}
                                    bg={el.children?.length ? colors.navbar_active_bg : "transparent"} 
                                >
                                    <Group>
                                        <img src={el.icon} alt="icon" height={20} width={20} /> 
                                        <Text fz={13} fw={el.children?.length ? 500 : 300}>
                                            {el.title}
                                        </Text>
                                    </Group>
                                    {el.children && (
                                        <>
                                            {!el.children.length ? <PiCaretDownBold size={14}/> : <PiCaretUpBold size={14}/>}
                                        </>
                                    )}
                                    {el.rightSection && (
                                        <Badge size="sm" color="myColor">10</Badge>
                                    )}
                                </Group>

                                {el.children && el.children.map(child => {
                                    const isActive = child.link === pathname;
                                    return (
                                        <Group 
                                            py="sm"
                                            key={child.id} 
                                            className={styles.group}
                                            bg={isActive ? colors.navbar_active_bg : "transparent"}
                                        >
                                            <div className={styles.fragment} />
                                            <Text fz={13} fw={isActive ? 500 : 300}>
                                                {child.title}
                                            </Text>
                                        </Group>
                                    )
                                })}
                            </Stack>
                        ))}
                    </Stack>
                </Section>

                <Section>
                    <Stack gap="xs">
                        {footerLinks.map(el => (
                            <Group key={el.id} p="sm" className={styles.group}>
                                <img src={el.icon} alt="icon" height={20} width={20} /> 
                                <Text fz={13} fw={300}>
                                    {el.title}
                                </Text>
                            </Group>
                        ))}
                        <Group p="sm" justify="space-between" wrap="nowrap">
                            <Group wrap="nowrap">
                                <Avatar src="https://randomuser.me/api/portraits/men/32.jpg" />
                                <Stack gap={2}>
                                    <Text size="xs" fw={600}>Mark Benson</Text>
                                    <Text size="xs" c="gray.6" lineClamp={1}>
                                        markbenson@core.com
                                    </Text>
                                </Stack>
                            </Group>

                            <img src={icons.logout} alt="logout" width={15} height={15} />
                        </Group>
                    </Stack>
                </Section>
            </Navbar>

            <Main pt={headerHeight * 1.5} pb="xl">
                <Header p="sm" ml="auto" w={headerWidth} h={headerHeight}>
                    <Group justify="space-between" align='center'>
                        <Burger
                            opened={opened}
                            onClick={toggle}
                            hiddenFrom="sm"
                            size="sm"
                        />
                        <Group gap={5}>
                            <PiCaretLeftBold color="gray" />
                            <Text size="sm" c="gray.7">Back</Text>
                        </Group>

                        <Group>
                            <TextInput 
                                w={400} 
                                placeholder='Search here ...' 
                                leftSection={<PiMagnifyingGlassBold />} 
                            />
                            <img src={icons.bell} alt="bell" width={25} height={25} />
                            <img src={icons.chats} alt="bell" width={25} height={25} />
                            <Group gap={5} style={{cursor: "pointer"}}>
                                <Avatar size={35} src="https://randomuser.me/api/portraits/women/2.jpg" />
                                <PiCaretDownBold color="gray" />
                            </Group>
                        </Group>
                    </Group>
                </Header>

                <Outlet />
            </Main>
        </AppShell>
    )
}
