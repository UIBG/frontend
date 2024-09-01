import React, { Suspense, ReactNode } from 'react';

interface SuspenseWrapperProps {
    children: ReactNode;
}

const SuspenseWrapper: React.FC<SuspenseWrapperProps> = ({ children }) => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            {children}
        </Suspense>
    );
};

export default SuspenseWrapper;
