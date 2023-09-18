// ProgressDemo.js
"use client"
// ProgressDemo.js
import React, { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { usePathname } from "next/navigation";

export default function ProgressDemo() {
    const [progress, setProgress] = useState(0);
    const path = usePathname();
    const [isProgressBarVisible, setProgressBarVisible] = useState(false);

    useEffect(() => {
        // Show the progress bar
        setProgressBarVisible(true);

        // Start a timer to complete the progress and hide the progress bar
        const timer = setTimeout(() => {
            setProgress(10);
            setProgress(100);
            setProgressBarVisible(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, [path]);

    return (
        <>
            {isProgressBarVisible && (
                <Progress value={progress} className="w-full z-50 absolute top-0" />
            )}
        </>
    );
}
