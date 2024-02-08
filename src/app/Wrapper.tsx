import React from 'react';

type Props = {
    children: React.ReactNode;
}

const Wrapper = (props:Props) => (
    <div>
        <h1>Wrapper</h1>
        {props.children}
    </div>
);

export default Wrapper;