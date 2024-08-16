"use client"
import React, { useEffect, useState } from 'react'

const ServerStatusAlert = () => {
    const [serverStatus, setServerStatus] = useState('checking');

    useEffect(() => {
      const checkServerStatus = async () => {
        try {
          const res = await fetch('/api/check-server');
          const data = await res.json();
          setServerStatus(data.status);
        } catch (error) {
          setServerStatus('stopped');
        }
      };
  
      checkServerStatus();
  
      const intervalId = setInterval(checkServerStatus, 5000); // Check every 5 seconds
  
      return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);
    
    return (<>
            {serverStatus === 'stopped' && (
            <div className='bg-slate-100 p-4 flex justify-between'>
                <div className='text-red-500'>
                The server is starting up. This may take up to a minute. You can try refreshing the page after a minute.
                </div>
                <div>
                current status: {serverStatus}
                </div>
            </div>
            )}
    </>)
}


export default ServerStatusAlert