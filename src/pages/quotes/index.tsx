import { useState } from "react";

import styles from "./quotes.module.scss";
import QuotesDetails from "@/components/pages/quotes/details";
import QuotesResponse from "@/components/pages/quotes/response";

enum QuotesEnum {
    details = "DETAILS",
    response = "RESPONSE",
};

export default function Quotes() {
    const [currEl, setCurrEl] = useState<QuotesEnum>(QuotesEnum.details);

    const _renderElement = () => {
        switch(currEl){
            case QuotesEnum.details:
                return <QuotesDetails onNavigate={() => setCurrEl(QuotesEnum.response)} />
            case QuotesEnum.response:
                return <QuotesResponse onCancel={() => setCurrEl(QuotesEnum.details)} />
            default:
                return <div>Not Found...</div>
        }
    };

    return (
        <section className={styles.section}>
            {_renderElement()}
        </section>
    )
}
