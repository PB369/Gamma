type Events = {
    color: string;
    date: string;
    title: string;
    time: string;
    isFinished: boolean;
    link?: string;
    address?: string;
    description?: string;
}

export const events: Events = [
        { date: "2025-08-10", title: "Meeting with Jam...", time: "at 8am", color: "#00ff00" },
        { date: "2025-08-10", title: "Pick up the car...", time: "at 11am", color: "#ff9900" },
        { date: "2025-08-10", title: "Presentation of...", time: "at 2pm", color: "#ff0000" },
        { date: "2025-08-10", title: "Coding Review...", time: "at 5pm", color: "#00ffff" },
        { date: "2025-08-10", title: "Extra Task", time: "at 7pm", color: "#cccccc" },
];