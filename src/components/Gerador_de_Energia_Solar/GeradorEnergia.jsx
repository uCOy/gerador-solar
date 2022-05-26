import React from 'react';
import { useEffect, useState } from "react";
import { CloudSun, CloudMoon, HouseLine } from "phosphor-react";
import './GeradorEnergia.css';


const KWH = 2.14;

function GeradorSolar() {
    const [hour, setHour] = useState(6);
  const [isActive, setIsActive] = useState(false);
  const [energy, setEnergy] = useState(0);

  useEffect(() => {
    let interval = null;

    interval = setInterval(() => {
      setHour(hour + 1);
    }, 1000);

    if (hour > 23) {
      setHour(0);
    }

    return () => clearInterval(interval);
  }, [hour]);

  useEffect(() => {
    if (hour > 5 && hour < 19) {
      setIsActive(true);
      setEnergy(energy + KWH);
    } else {
      setIsActive(false);
    }

    if (hour === 24) {
      setEnergy(0);
    }
  }, [hour]);

    return (
        <div className="GeneratorBody">
          <p className="Generator">gerador de energia solar</p>
          <p className="DayTime" >Hora do dia: {hour}h </p>
          {isActive ? <CloudSun size={100} height="100px" color="#fbc80e" weight="thin" /> : <CloudMoon size={100} color="#060937" height="100px" weight="thin" />}
          <div className="HouseDiv">
            <HouseLine className="House" size={140} height="100px" weight="thin" />
          </div>
        <p className="Energy">Energia Gerada: {energy.toFixed(2)} Kw/h</p>
      </div>
    )
  }
  
export default GeradorSolar;
