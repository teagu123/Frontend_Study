import { useEffect } from "react";

function Q3components({ count, setCount }) {
    useEffect(() => {
        const total = setInterval(() => {
            setCount((count += 1));
            console.log("aa");
        }, 2000);
        return () => {
            clearInterval(total);
            setCount(0);
        };
    }, []);

    return <div>🏃‍♂️ 줄넘기 ... ing </div>;
}
export default Q3components;
