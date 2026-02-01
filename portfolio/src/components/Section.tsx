import { useEffect, useState } from "react";

interface SectionProps {
    id: string;
    children: React.ReactNode;
}

export default function Section({ id, children }: SectionProps) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        const element = document.getElementById(id);
        if (element) observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        };
    }, [id]);

    return (
        <section
            id={id}
            className={`transition-all duration-700 ease-out ${visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
                }`}
        >
            {children}
        </section>
    );
}
