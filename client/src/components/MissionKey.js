import React from 'react';

const MissionKey = () => {
    return (
        <div className='my-3'>
            <p>
                <span className='px-3 mr-2 bg-success' /> = Successful mission
            </p>
            <p>
                <span className='px-3 mr-2 bg-danger' /> = Failed mission
            </p>
            <p>
                <span className='px-3 mr-2 bg-warning' /> = Unknown
            </p>
        </div>
    );
}

export default MissionKey;