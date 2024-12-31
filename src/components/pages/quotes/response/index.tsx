import { useState } from "react";
import { Stack, Breadcrumbs, Box, Stepper, Anchor } from "@mantine/core";

import styles from "./response.module.scss";

import QuoteRequest from "./request";
import QuoteTerms from "./terms";
import QuoteReview from "./review";

interface QuotesResponseProps {
    onCancel: () => void;
}

export default function QuotesResponse({onCancel}:QuotesResponseProps) {
    const [active, setActive] = useState<number>(0);

    const nextStep = () => {
        window.scrollTo({ top: 0, behavior: "instant" });
        setActive((current) => (current < 3 ? current + 1 : current));
    };
    // const prevStep = () => {
    //     scrollIntoView({alignment: "start"});
    //     setActive((current) => (current > 0 ? current - 1 : current));
    // }

    const _renderElement = () => {
        switch(active) {
            case 0:
                return (
                    <QuoteRequest 
                        onCancel={onCancel} 
                        onContinue={nextStep} 
                    />
                );
            case 1:
                return (
                    <QuoteTerms 
                        onCancel={onCancel} 
                        onContinue={nextStep} 
                    />
                );
            case 2:
                return (
                    <QuoteReview 
                        onCancel={onCancel} 
                        onContinue={nextStep} 
                    />
                )
            default: 
                return <div>Not Found ...</div>
        }
    }

    return (
        <Stack gap={25}>
            <Breadcrumbs>
                <Anchor href="/" c="myColor" size="sm">
                    Quotes
                </Anchor>
                <Anchor href="/" c="gray" size="sm">
                    Quote Response
                </Anchor>
            </Breadcrumbs>

            <Box py="lg" px="xl" className={styles.box}>
                <Stepper color="myColor" active={active} onStepClick={setActive} allowNextStepsSelect={false}>
                    <Stepper.Step label="Request Information" description="Provide details about the RFQ"/>
                    <Stepper.Step label="Terms & Attachments" description="Payment and delivery terms"/>
                    <Stepper.Step label="Review" description="Confirm all information provided"/>
                </Stepper>
            </Box>

            {_renderElement()}
        </Stack>
    )
}
