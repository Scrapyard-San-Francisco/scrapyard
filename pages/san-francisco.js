import { useEffect } from "react";

export default function Sf() {
    useEffect(() => {
        window.location.replace("https://scrapyardsf.com");
    }, []);

    return (
        <i style={{ margin: "1em", opacity: 0.5 }}>
            Redirecting you to <a href="https://scrapyardsf.com" style={{ color: "black" }}>scrapyardsf.com</a>
        </i>
    );
}
