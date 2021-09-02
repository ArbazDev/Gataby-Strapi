import React from 'react'
import "../assets/css/loading.css"
import { useEffect, useState } from "react";
import { nominalTypeHack } from 'prop-types';
const loading = () => {
  const  [loading, setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true)
    setTimeout(() => {
    setLoading(false)
    }, 2000);
  },[])
    return (
        <div>
            <div className="bg">
        <div className="loading">
          <div className="finger finger-1">
            <div className="finger-item">
              <span /><i />
            </div>
          </div>
          <div className="finger finger-2">
            <div className="finger-item">
              <span /><i />
            </div>
          </div>
          <div className="finger finger-3">
            <div className="finger-item">
              <span /><i />
            </div>
          </div>
          <div className="finger finger-4">
            <div className="finger-item">
              <span /><i />
            </div>
          </div>
          <div className="last-finger">
            <div className="last-finger-item"><i /></div>
          </div>
        </div>
      </div>
        </div>
    )
}

export default loading;
