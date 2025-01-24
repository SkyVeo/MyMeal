import React, { useEffect, useState } from "react";

export const useSyncedState = <T>(value: T): [T, React.Dispatch<React.SetStateAction<T>>] => {
    const [syncedValue, setSyncedValue] = useState<T>(value);

    useEffect(() => {
        setSyncedValue(value);
    }, [value]);

    return [syncedValue, setSyncedValue];
};
